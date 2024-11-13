import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions/actions";
import ProfileImg from "../components/profile/ProfileImg";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileBio from "../components/profile/ProfileBio";
import MyPosts from "../components/profile/MyPosts";

const ProfilePage = () => {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const getProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    getProfile();
  }, []);

  if (state.loading) return <div>Loading....</div>;
  if (state.error) return <div>{state.error.message}</div>;
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImg />
        <ProfileInfo />
        <ProfileBio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        <dir>
          <MyPosts />
        </dir>
      </div>
      {/* comments */}
    </>
  );
};

export default ProfilePage;
