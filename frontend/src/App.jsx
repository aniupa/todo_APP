import React from "react";
import MainRoutes from "./routes/MainRoutes";
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <>
      <MainRoutes />
      <ToastContainer/>
    </>
  );
};

export default App;
