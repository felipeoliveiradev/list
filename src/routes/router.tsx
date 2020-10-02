import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "pages";
import { Main } from "layout";
import { Routes } from "./object";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard/:path?">
        <Suspense fallback={<> teste</>}>
          <Main>
            <Switch>
              {Routes.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                />
              ))}
            </Switch>
          </Main>
        </Suspense>
      </Route>
    </Switch>
  );
};
