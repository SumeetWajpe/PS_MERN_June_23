import { useEffect, useState } from "react";
import { PostModel } from "../../models/post.model";

type PostsState = {
  posts: PostModel[];
};

export function Posts() {
  let [postsData, setPostsData] = useState<PostsState>({ posts: [] });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => setPostsData({ posts }));
  }, []);
  return (
    <>
      <header>
        <h1>Posts</h1>
        <ul>
          {postsData.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </header>
    </>
  );
}
