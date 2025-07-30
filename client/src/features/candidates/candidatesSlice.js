// src/features/candidates/candidatesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCandidates,
  addCandidate,
  deleteCandidate,
} from "./candidatesAPI";

// Thunks
export const getCandidates = createAsyncThunk("candidates/get", async (_, thunkAPI) => {
  try {
    return await fetchCandidates();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch candidates");
  }
});

export const createCandidate = createAsyncThunk(
  "candidates/create",
  async (data, thunkAPI) => {
    try {
      return await addCandidate(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to create candidate");
    }
  }
);

export const removeCandidate = createAsyncThunk(
  "candidates/delete",
  async (id, thunkAPI) => {
    try {
      return await deleteCandidate(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to delete candidate");
    }
  }
);

// Slice
const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCandidates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getCandidates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createCandidate.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(createCandidate.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      })
      .addCase(removeCandidate.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c.id !== action.payload.id);
      })
      .addCase(removeCandidate.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export default candidatesSlice.reducer;
