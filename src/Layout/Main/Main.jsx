import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return <div>
    <div>
    <NavBar></NavBar>
    <div className="h-screen">

    <Outlet></Outlet>
    </div>
    <Footer></Footer>

    </div>
  </div>;
};

export default Main;
