import { BrowserRouter } from "react-router";
import { useEffect } from "react";
import { fetchSettings } from "./store/settings/settingsThunks";
import { useAppDispatch } from "./store/hooks";
import AppRouter from "./routes/AppRouter";
import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
