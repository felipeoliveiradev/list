import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "routes/router";
import { ToastContainerStyled } from 'styles/global';

// import { Overlay } from "components/Overlay/overlay";





export const App: React.FunctionComponent = () => {
  return (
    <>
      {/* <Overlay /> */}
      <Router>
        <Routers />
      </Router>
      <ToastContainerStyled />
    </>
  );
};
