import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostModel } from "../../models/post.model";

export default function PostDetails() {
  const { id } = useParams();
  const [thePost, setThePost] = useState<PostModel>(new PostModel());
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((post: PostModel) => setThePost(post));
  }, []);
  return (
    <div className="alert alert-secondary">
      <header>
        <h1>Post Details for {id}</h1>
      </header>
      {thePost.title != "" ? (
        <div>
          <h2>Title : </h2> {thePost.title}
          <h3>Body : </h3>
          {thePost.body}
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
}
