import { useEffect, useState } from "react";
import { PostModel } from "../../models/post.model";
import { Link } from "react-router-dom";

type PostsState = {
  posts: PostModel[];
};

export default function Posts() {
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
        <ul className="list-group">
          {postsData.posts.map(post => (
            <li className="list-group-item" key={post.id}>
              <Link to={"/postdetails/" + post.id}> {post.title} </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
