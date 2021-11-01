import React from "react";
import Loader from "./component/common/loader/loader";
import Header from "./component/common/header/header";
import Sidebar from "./component/common/sidebar/sidebar";
import ThemeCustomize from "./component/common/theme-customizer/themeCustomize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ children }) => {
  return (
    <>
      <Loader />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <div className="page-body">{children}</div>
          <ThemeCustomize />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
