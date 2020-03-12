import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import CharacterDetails from "./CharacterDetails";
import SceneRouter from "./components/SceneRouter";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <SceneRouter path="/character/:characterId">
            <CharacterDetails />
          </SceneRouter>
          <SceneRouter path="/" exact>
            <Home />
          </SceneRouter>
        </Switch>
      </BrowserRouter>
    </>
  );
}
