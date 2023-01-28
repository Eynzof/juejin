//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface ThemeState {
  isLight: boolean;
}

// Initial state
const initialState: ThemeState = {
  isLight: true,
};

// Actual Slice
// @ts-ignore
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action to set the authentication status
    setThemeState(state, action) {
      state.isLight = action.payload;
    },

    switchTheme(state) {
      state.isLight = !state.isLight;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.isLight,
        };
      },
    },
  },
});

export const { setThemeState, switchTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme.isLight;

export default themeSlice.reducer;
