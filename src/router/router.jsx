import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import rootlayout from "../layouts/rootlayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:rootlayout,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);