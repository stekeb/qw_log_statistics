import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./display.css";
import Healthlist from "../cardlists/Healthlist";
import Maplist from "../cardlists/Maplist";
import Misclist from "../cardlists/Misclist";
import Weaponlist from "../cardlists/Weaponlist";
import Profile from "../profile/Profile";
import { findUserData } from "../../services/API_service";

function Display({ id }: { id: number }) {
  const [userDataState, setUserDataState] = useState({});

  useEffect(() => {
    findUserData(id).then((userData) => setUserDataState(userData));
  }, []);
  console.log(userDataState);

  return (
    <div>
      <h2>Display</h2>
      <Switch>
        <Route exact path="/">
          <Weaponlist />
        </Route>
        <Route path="/weapons">
          <Weaponlist />
        </Route>
        <Route path="/health">
          <Healthlist />
        </Route>
        <Route path="/maps">
          <Maplist />
        </Route>
        <Route path="/misc">
          <Misclist />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default Display;
