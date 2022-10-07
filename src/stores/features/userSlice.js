import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const { REACT_APP_API_ROUTE: API_ROUTE } = process.env

const initialState = {
  status: "idle",
  error: "",
  data: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ username, password }, thunkAPI) => {
    try {
      const endpoint = `/api/people/sign-in`
      const { data } = await axios.post(API_ROUTE + endpoint, {
        username,
        password,
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const getUser = (state) => state.user

export const { signOut } = userSlice.actions
export default userSlice.reducer
