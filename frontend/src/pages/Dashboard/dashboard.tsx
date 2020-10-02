import { Layout } from "packages";
import React from "react";
import { layout } from "./layout";

export const Dashboard: React.FC = () => {
  return <Layout {...layout()} />;
};
