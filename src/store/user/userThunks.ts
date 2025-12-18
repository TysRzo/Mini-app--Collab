import axios from "axios";
import type { AppDispatch } from "../store";
import { login, logout } from "./userSlice";

type LoginApiResponse = {
  success: boolean;
  user: {
    id: number;
    email: string;
    role: "admin" | "user";
  };
};

export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    const res = await axios.post<LoginApiResponse>(
      "http://localhost:3000/api/login",
      { email, password },
      { withCredentials: true }
    );

    dispatch(
      login({
        id: res.data.user.id,
        email: res.data.user.email,
        role: res.data.user.role,
      })
    );
  };

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await axios.post(
      "http://localhost:3000/api/logout",
      {},
      { withCredentials: true }
    );
  } finally {
    dispatch(logout());
  }
};
