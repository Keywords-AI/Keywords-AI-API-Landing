import React, { useEffect } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import NavigationLayout from "src/layouts/NavigationLayout/NavigationLayout";

const Routes = ({ getUser }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <NavigationLayout />,
      children: rootPaths,
    },
  ]);
  return <div data-theme="light">{routes}</div>;
};
