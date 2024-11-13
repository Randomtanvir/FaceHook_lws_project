/* eslint-disable react/prop-types */
import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostAction from "./PostAction";
import PostComments from "./PostComments";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostAction post={post} />
      <PostComments post={post} />
    </article>
  );
};

export default PostCard;
