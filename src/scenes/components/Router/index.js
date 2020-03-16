import React from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "../../Home";
import CharacterDetails from "../../CharacterDetails";
import SceneRoute from "./components/SceneRoute";
import { Result } from "antd";

export default function Router({ characterName, characterId }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <SceneRoute
            path="/character/:characterId"
            onBack={history => history.push("/")}
            title={characterName || "Loading..."}
            subtitle={characterId && `ID: ${characterId}`}
            routes={[
              {
                path: `/character/${characterId}`,
                breadcrumbName: "Character"
              }
            ]}
          >
            <CharacterDetails />
          </SceneRoute>
          <SceneRoute path="/" exact title="Marvel Characters">
            <Home />
          </SceneRoute>
          <SceneRoute>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist"
              extra={<Link to="/">Back Home</Link>}
            />
          </SceneRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}
