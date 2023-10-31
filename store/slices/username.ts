import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "username",
  initialState: "",
  reducers: {
    setUsernameSlice: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUsernameSlice } = usernameSlice.actions;
export default usernameSlice.reducer;
