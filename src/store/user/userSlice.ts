import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "admin" | "user";

export type User = {
  id: number;
  email: string;
  role: UserRole;
};

export type UserState = {
  user: User | null;
  isLogged: boolean;
};

const initialState: UserState = {
  user: null,
  isLogged: false,
};

type LoginPayload = {
  id: number;
  email: string;
  role: UserRole;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        role: action.payload.role,
      };
      state.isLogged = true;
    },

    logout: (state) => {
      state.user = null;
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
