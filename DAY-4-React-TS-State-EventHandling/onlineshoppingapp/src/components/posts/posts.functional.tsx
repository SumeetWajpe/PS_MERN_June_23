import { useEffect } from "react";

export function Posts() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => console.log(posts));
  });
  return (
    <>
      <header>
        <h1>Posts</h1>
      </header>
    </>
  );
}
