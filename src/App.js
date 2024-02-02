import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import QuickMart from "./components/QuickMart";
import RestaurantDetails from "./components/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import OrderPage from "./components/OrderPage";
import { Login } from "./components/Login";
import PaymentPage from "./components/PaymentPage";
import Shimmer from "./components/Shimmer";

const QuickMart = lazy(()=>import('./components/QuickMart'));

const App=()=>{
    return <Provider store={store}>
        <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow">
        <Outlet/>
        </div>
        <Footer/>
        </div>
    </Provider>
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
                element:
                <Suspense fallback={<Shimmer/>}>
                    <QuickMart/>
                </Suspense>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantDetails/>,
            },
            {
                path:"/order",
                element:<OrderPage/>,
            },
            {
                path:"/payment",
                element:<PaymentPage/>,
            },
            {
                path:"/login",
                element:<Login/>,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);