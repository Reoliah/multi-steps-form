import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    contact: "",
  },
  reducers: {
    setUser: (state, action) => {
      const { username, email, contact } = action.payload;
      state.username = username;
      state.email = email;
      state.contact = contact;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
