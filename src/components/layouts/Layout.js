import React from "react";

//components
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default Layout;
