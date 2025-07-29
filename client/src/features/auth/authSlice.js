// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./authAPI";

const EXPIRE_KEY = "auth_expiry";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      const expiry = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
      localStorage.setItem("token", response.token);
      localStorage.setItem(EXPIRE_KEY, expiry);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem(EXPIRE_KEY);
      state.user = null;
      state.token = null;
      state.error = null;
    },
    checkSession: (state) => {
      const token = localStorage.getItem("token");
      const expiry = Number(localStorage.getItem(EXPIRE_KEY));

      if (token && Date.now() < expiry) {
        state.token = token;
      } else {
        localStorage.clear();
        state.token = null;
        state.user = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, checkSession } = authSlice.actions;
export default authSlice.reducer;
