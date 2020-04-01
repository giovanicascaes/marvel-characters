import React from "react";
import { Route } from "react-router-dom";
import SceneBase from "./components/SceneBase";

export default function SceneRoute({
  title,
  subtitle,
  routes,
  onBack,
  children,
  path,
  ...otherProps
}) {
  return (
    <Route
      {...otherProps}
      path={`${process.env.PUBLIC_URL}${path}`}
      render={({ history }) => (
        <SceneBase
          title={title}
          subtitle={subtitle}
          routes={routes}
          onBack={onBack}
          history={history}
        >
          {children}
        </SceneBase>
      )}
    />
  );
}
