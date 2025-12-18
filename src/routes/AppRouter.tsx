import { Routes, Route } from 'react-router';
import Homepage from '../pages/Homepage';
import AdminDashboard from '../pages/AdminDashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';




const AppRouter = () => {
    return (
       <Routes>
         <Route index element={<Homepage />} />
         <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
            
    );
}
export default AppRouter;
