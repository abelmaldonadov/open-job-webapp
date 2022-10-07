import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./features/userSlice"
import PostsReducer from "./features/postsSlice"
import thunk from "redux-thunk"

export const store = configureStore({
  reducer: {
    user: UserReducer,
    posts: PostsReducer,
  },
  middleware: [thunk],
})
