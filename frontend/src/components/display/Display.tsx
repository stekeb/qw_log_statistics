import React from "react";
import { Switch, Route } from "react-router-dom";
import "./display.css";
import Healthlist from "../cardlists/Healthlist";
import Maplist from "../cardlists/Maplist";
import Misclist from "../cardlists/Misclist";
import Weaponlist from "../cardlists/Weaponlist";
import Profile from "../profile/Profile";

function Display(props: any) {
  let isAuthenticated: Boolean = true;
  let id: number = 1;

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
