import React from "react";
import { Route } from "react-router-dom";
import { SceneWrapper } from "./styles";

export default function SceneRoute({ children, ...otherProps }) {
  return (
    <Route {...otherProps}>
      <SceneWrapper>{children}</SceneWrapper>
    </Route>
  );
}
