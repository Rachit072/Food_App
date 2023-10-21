import { useState } from "react";
import {Link} from 'react-router-dom';
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
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>                
                </li>
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