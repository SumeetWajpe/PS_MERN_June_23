import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  return (
    <div>
      <header>
        <h1>Post Details for {id}</h1>
      </header>
    </div>
  );
}
