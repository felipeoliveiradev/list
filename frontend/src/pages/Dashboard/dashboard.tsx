import React from "react";
import { Layout } from "packages";
import { layout } from "./layout";

export const Dashboard: React.FC = () => {
  return <Layout {...layout()} />;
};
