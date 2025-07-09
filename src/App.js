import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Footer from "./components/Footer";


// const About= lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <Outlet />
      </main>
      <Footer />
    </div>
    </Provider>
    
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
  //   {
  //   path:"/about",
  //   element: (
  //   <Suspense fallback={<h1>loading....</h1>}>
  //     <About/>
  //     </Suspense>
  //     ),
  // },
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/cart",
    element:<Cart/>
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