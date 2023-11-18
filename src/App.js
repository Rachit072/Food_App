import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import QuickMart from "./components/QuickMart";
import RestaurantDetails from "./components/RestaurantDetails";

const App=()=>{
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/quickMart",
                element:<QuickMart/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantDetails/>,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);