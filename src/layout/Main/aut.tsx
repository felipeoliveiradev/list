import React, { useCallback, useEffect } from "react";

import { callApiExtenal } from "helper/callApi/callApi";
import { useHistory } from "react-router-dom";

export const Aut: React.FC = () => {
  const history = useHistory();
  const sessionControl = useCallback(async () => {
    if (!sessionStorage.getItem("user")) {
      sessionStorage.removeItem("token");
      history.push("/");
      return;
    }
    try {
      await callApiExtenal({
        method: "GET",
        path: "authentication",
      });
    } catch (err) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("profileNav");
      history.push("/");
      return err;
    }
  }, [history]);

  useEffect(() => {
    sessionControl();
  }, [sessionControl]);
  return <></>;
};
