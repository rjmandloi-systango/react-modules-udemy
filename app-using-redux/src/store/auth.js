import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthenticationState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions=authSlice.actions;
export default authSlice.reducer;
