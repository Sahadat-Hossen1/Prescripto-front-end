import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return <div>
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>

    </div>
  </div>;
};

export default Main;
