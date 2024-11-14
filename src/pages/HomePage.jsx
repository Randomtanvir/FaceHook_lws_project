import useAxios from "./../hooks/useAxios";
import PostsList from "./../components/posts/PostsList";
import { useEffect, useReducer } from "react";
import { initialState, postReducer } from "../reducers/postReducer";
import { actions } from "../actions/actions";

const HomePage = () => {
  const { api } = useAxios();
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    const getPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };
    getPosts();
  }, [api]);

  return (
    <div>
      <PostsList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
