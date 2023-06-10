import {
    createBrowserRouter,
  } from "react-router-dom";

  import Main from "../Layout/Main";
  import NotFound from "../Pages/NotFound/NotFound";
  import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
            
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
  ])