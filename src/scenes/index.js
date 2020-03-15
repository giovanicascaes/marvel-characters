import React from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "./Home";
import CharacterDetails from "./CharacterDetails";
import SceneRouter from "./components/SceneRouter";
import { Result } from "antd";

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
          <SceneRouter>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist"
              extra={<Link to="/">Back Home</Link>}
            />
          </SceneRouter>
        </Switch>
      </BrowserRouter>
    </>
  );
}
