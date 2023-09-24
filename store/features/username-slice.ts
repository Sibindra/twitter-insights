import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsernameState = {
  username: string;
};

const initialState: UsernameState = {
  username: "",
};

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setStoreUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setStoreUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
