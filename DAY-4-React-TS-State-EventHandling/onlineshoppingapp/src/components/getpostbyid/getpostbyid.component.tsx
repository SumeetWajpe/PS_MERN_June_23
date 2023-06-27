import React, { useEffect, useState } from "react";
import { PostModel } from "../../models/post.model";

export default function GetPostById() {
  const [postId, setPostId] = useState<number>(1);
  const [post, setPost] = useState<PostModel>(new PostModel());
  useEffect(() => {
    if (postId) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then(res => res.json())
        .then((post: PostModel) => setPost(post));
    }
  }, [postId]);
  return (
    <div>
      <label>
        {" "}
        Enter Post Id:{" "}
        <input
          type="text"
          onChange={e => setPostId(parseInt(e.target.value))}
        />
      </label>
      <h2>{post.title}</h2>
    </div>
  );
}
