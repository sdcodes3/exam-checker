import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Test from "../pages/test/Test";
import HomeWrapper from "../pages/home/HomeWrapper";
import Login from "../pages/login/Login";

const BlankPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("id")) {
      console.log("Navigating to login");
      navigate("/login");
    }
  }, [navigate]); // Dependency array ensures effect runs only on mount

  return <div>Page not found</div>;
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<BlankPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
