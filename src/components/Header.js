import { useState } from "react";
import logo from "../assets/TastyTracks.png"

const Title = () =>(
    <a href="/"><img className="logo" src={logo} alt="TastyTracks" /></a> 
); 

const Header =()=>{
    const[isLogged,setIslogged] = useState(true);

    return <>
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
        {   isLogged ? (<button className="login-btn" onClick={()=>{setIslogged(false)}}>LogIn</button>
            ):(
            <button className="login-btn" onClick={()=>{setIslogged(true)}} >LogOut</button>
        )}
    </div>
    </>
}
export default Header;