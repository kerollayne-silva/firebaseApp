import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Admin from "../Pages/Admin/Admin";
import Private from "./Private";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Private><Admin /></Private>} />
    </Routes>
  );
}

export default AppRoutes;