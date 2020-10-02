import {
  AiOutlineAlert,
  AiOutlineFullscreenExit,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineSetting,
} from "react-icons/ai";
import { Container, Inner } from "./style";

import { BiTachometer } from "react-icons/bi";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Container>
      <Inner location={location.pathname}>
        <ul>
          <li onClick={() => history.push("/dashboard")}>
            <AiOutlineHome />
          </li>
          {/* <li onClick={() => history.push("/dashboard/statistics")}>
            <BiTachometer />
          </li>
          <li onClick={() => history.push("/dashboard/projects")}>
            <AiOutlineProject />
          </li>
          <li onClick={() => history.push("/dashboard/trackings")}>
            <AiOutlineAlert />
          </li> */}
          {/* <li onClick={() => history.push("/dashboard/profile")}><AiOutlineUser/></li> */}
        </ul>
        <ul>
          {/* <li>
            <AiOutlineSetting />
          </li> */}
          <li
            onClick={() => {
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("user");
              sessionStorage.removeItem("profileNav");
              history.push("/");
              return;
            }}
          >
            <AiOutlineFullscreenExit />
          </li>
        </ul>
      </Inner>
    </Container>
  );
};
