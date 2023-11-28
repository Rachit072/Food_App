import { useState,useContext } from "react";
import {Link} from 'react-router-dom';
import logo from "../assets/TastyTracks.png"
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOffline";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const Title = () =>(
    <a href="/"><img className="logo" src={logo} alt="TastyTracks" /></a> 
); 

const Header =()=>{
    const[isLogged,setIslogged] = useState(true);
    const isonline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector((store) =>store.cart.items);
    console.log(cartItems);
    console.log("a");

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
                <li>
                    <Link to='/quickMart'>QuickMart</Link>                
                </li>
                <li>
                    <Link to ='/cart'>Cart-{cartItems.length}-Items</Link>
                </li>
            </ul> 
        </div>
        <div>{isonline?<FontAwesomeIcon  icon={faCircle} style={{color: "#04950e",}} />:<FontAwesomeIcon icon={faCircle} style={{color: "#e60505",}} />}</div> 
        {   isLogged ? (<button className="login-btn" onClick={()=>{setIslogged(false)}}>LogIn</button>
            ):(
                <div>
                    <span className="text-red-700">{user.name}</span>
                    <button className="login-btn" onClick={()=>{setIslogged(true)}} >LogOut</button>
                </div>
        )}
    </div>
    </>
}
export default Header;