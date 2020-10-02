import { Layout } from "packages";
import React from "react";
import { config } from "./tools/configs";

export const Dashboard: React.FC = () => {
  return <Layout {...config()} />;
};
