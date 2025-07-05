import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";


const About= lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
    path:"/about",
    element: (
    <Suspense fallback={<h1>loading....</h1>}>
      <About/>
      </Suspense>
      ),
  },
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/restaurantMenu/:resId",
    element:<RestaurantMenu/>,
  }
  ],
    errorElement:<Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);