import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home Page/Home";
import Main from "../layouts/Main";
import ContactUs from "../pages/ContactUs/Contactus";
import About from "../pages/About/About";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/contactus",
            element:<ContactUs/>
        },
        {
            path:"/about",
            element:<About/>
        },
      ]
    },
  ]);

  export default router;