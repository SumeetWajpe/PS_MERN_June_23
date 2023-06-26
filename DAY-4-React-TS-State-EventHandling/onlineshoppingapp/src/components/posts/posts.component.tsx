import React from "react";
import { PostModel } from "../../models/post.model";
type PostsState = {
  posts: PostModel[];
};
export class Posts extends React.Component {
  state: Readonly<PostsState> = { posts: [] };
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.state.posts.length
            ? this.state.posts.map((post: PostModel) => (
                <li className="list-group-item" key={post.id}>
                  {post.title}
                </li>
              ))
            : "Loading.."}
        </ul>
      </>
    );
  }
}
