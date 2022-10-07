import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const { REACT_APP_API_ROUTE: API_ROUTE } = process.env

const initialState = {
  status: "idle",
  error: "",
  data: null,
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findPostsByTitleIsLike.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(findPostsByTitleIsLike.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(findPostsByTitleIsLike.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export const findPostsByTitleIsLike = createAsyncThunk(
  "posts/findPostsByTitleIsLike",
  async ({ title }, thunkAPI) => {
    try {
      const endpoint = `/api/posts/find-is-like/title/${title}`
      const { data } = await axios.get(API_ROUTE + endpoint)
      console.log(data)
      return thunkAPI.fulfillWithValue(data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const getPosts = (state) => state.posts

export default postsSlice.reducer
