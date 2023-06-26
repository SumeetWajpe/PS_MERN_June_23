import React from "react";

export class Posts extends React.Component {
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => console.log(posts));
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>Posts</h1>
      </>
    );
  }
}
