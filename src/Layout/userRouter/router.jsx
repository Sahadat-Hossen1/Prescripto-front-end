import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../Main/Main";
import Alldoctors from "../../Pages/All-Doctors/alldoctors";
// import About from './../../Pages/About/About';
import About from "../../Pages/About/about";
import Contact from "../../Pages/Contact/contact";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/about",
        element:<About></About>
      },
      {
        path:"/alldoctors",
        element:<Alldoctors></Alldoctors>
      },{
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  }
])
export default router