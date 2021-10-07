import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Display from "../../components/display/Display";
import Logstable from "../../components/logstable/Logstable";

function Main(props: any) {
  let isAuthenticated: Boolean = true;
  let id: number = 1;
  return (
    <Router>
      <div>
        <Banner />
        <Navbar />
        <Display />
        <Logstable />
      </div>
    </Router>
  );
}

export default Main;
