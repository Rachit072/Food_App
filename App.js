import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Images/TastyTracks.png"

const Title = () =>(
    <a href="/"><img className="logo" src={logo} alt="TastyTracks" /></a> 
); 

const Header =()=>(
    <div className="header">
        <Title/>
        <div className="nav-items">
           <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul> 
        </div>
    </div>
);

const App=()=>{
    return <>
        <Header/>
    </>
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>);