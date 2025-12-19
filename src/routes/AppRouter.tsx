import { Routes, Route } from "react-router";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/Dashboard";
import AddVote from "../pages/admin/AddVote";
import EditVote from "../pages/admin/EditVote";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/votes/nouveau" element={<AddVote />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/admin/votes/modifier/:id" element={<EditVote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
