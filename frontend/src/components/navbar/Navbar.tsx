import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props: any) {
  return (
    <div>
      <h2 className="test">Navbar</h2>
      <Link to="/weapons">Weapons</Link>
      <Link to="/health">Health</Link>
      <Link to="/maps">Maps</Link>
      <Link to="/misc">Misc</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Navbar;
