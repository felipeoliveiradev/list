import React, { useState } from "react";

import { Layout } from "packages";
import { config } from "./tools/configs";
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const props = {
    state: {
      dataState: { data, setData },
      errorState: {error, setError}
    },
    history: history
  };
  
  return <Layout {...config(props)} />;
};
