/* eslint-disable react/prop-types */

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostAction from "./PostAction";
import PostComments from "./PostComments";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody poster={post?.image} content={post.content} />
      <PostAction postID={post?.id} postCommentCount={post?.comments?.length} />
      <PostComments post={post} />
    </article>
  );
};

export default PostCard;
