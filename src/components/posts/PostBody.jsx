/* eslint-disable react/prop-types */
const PostBody = ({ content, poster }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <div className="flex flex-col items-center justify-center  overflow-hidden">
        <p className="self-start my-4">{content}</p>

        <img
          className="max-w-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default PostBody;
