import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  registrationsClosed: boolean;
};

const initialState: SettingsState = {
  registrationsClosed: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setRegistrationsClosed: (state, action: PayloadAction<boolean>) => {
      state.registrationsClosed = action.payload;
    },
  },
});

export const { setRegistrationsClosed } = settingsSlice.actions;
export default settingsSlice.reducer;
