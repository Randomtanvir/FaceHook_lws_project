/* eslint-disable react/prop-types */

import PostCard from "./PostCard";

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PostsList;
