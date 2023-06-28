import { createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../models/post.model";

let initialState: PostModel[] = [];
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store, action) => {
      // change biz logic
      return store;
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
