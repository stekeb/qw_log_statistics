import React from 'react';
import './main.css';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Display from '../../components/display/Display';

function Main(props: any) {
  return (
    <div>
      <Banner />
      <Navbar />
      <Display />
      
    </div>
  );
}

export default Main;