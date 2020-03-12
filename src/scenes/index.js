import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import SceneRouter from "./components/SceneRouter";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <SceneRouter path="/">
            <Home />
          </SceneRouter>
        </Switch>
      </BrowserRouter>
    </>
  );
}
