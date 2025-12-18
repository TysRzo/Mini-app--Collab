import axios from "axios";
import { setRegistrationsClosed } from "./settingsSlice";
import type { AppDispatch } from "../store";

type SettingsApiResponse = {
  registrationsClosed: string;
};

export const fetchSettings = () => async (dispatch: AppDispatch) => {
  const res = await axios.get<SettingsApiResponse>(
    "http://localhost:3000/api/settings"
  );

  dispatch(setRegistrationsClosed(res.data.registrationsClosed === "true"));
};
