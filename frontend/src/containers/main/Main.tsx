import React from "react";
import "./main.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Display from "../../components/display/Display";
import Logstable from "../../components/logstable/Logstable";

function Main(props: any) {
  return (
    <div>
      <Banner />
      <Navbar />
      <Display />
      <Logstable />
    </div>
  );
}

export default Main;
