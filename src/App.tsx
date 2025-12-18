import { BrowserRouter } from "react-router";
import "./App.css";
import AppRouter from "./routes/AppRouter";

const App= () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
