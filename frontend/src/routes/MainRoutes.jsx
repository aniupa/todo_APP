import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home.jsx";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
