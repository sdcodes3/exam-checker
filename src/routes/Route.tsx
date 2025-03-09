import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../pages/test/Test";
import HomeWrapper from "../pages/home/HomeWrapper";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<>Page not found !!</>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
