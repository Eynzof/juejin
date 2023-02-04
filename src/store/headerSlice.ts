import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface headerState {
  headerCollapsed: boolean;
}

// Initial state
const initialState: headerState = {
  headerCollapsed: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderState(state, action) {
      state.headerCollapsed = action.payload;
    },

    switchHeaderState(state, _) {
      state.headerCollapsed = !state.headerCollapsed;
    },
  },
});

export const { setHeaderState, switchHeaderState } = headerSlice.actions;

export const selectHeaderCollapsed = (state: AppState) =>
  state.header.headerCollapsed;

export default headerSlice.reducer;
