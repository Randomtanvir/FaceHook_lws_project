import useProfile from "./useProfile";

const useAvater = (post) => {
  const { state } = useProfile();

  const isMe = state?.user?.id === post?.author?.id;

  const avatar = isMe ? `${state?.user?.avatar}` : `${post.author.avatar}`;

  const avaterURL = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;

  return { avaterURL };
};

export default useAvater;
