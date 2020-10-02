import {
  Container,
  MuiAiOutlineCheckCircle,
  MuiAiOutlineCloseCircle,
  MuiAiOutlineWarning,
} from "./style";

import { IBannerProps } from "./interfaces";
import React from "react";

export const Banner: React.FC<IBannerProps> = ({ status, subtitle, title }) => {
  return (
    <Container>
      <ul>
        <li>
          {status === "error" && <MuiAiOutlineCloseCircle />}
          {status === "success" && <MuiAiOutlineCheckCircle />}
          {status === "warning" && <MuiAiOutlineWarning />}
        </li>
        <li>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </li>
      </ul>
    </Container>
  );
};

