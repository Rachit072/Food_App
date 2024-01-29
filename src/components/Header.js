import { useEffect } from "react";
import {Link} from 'react-router-dom';
import logo from "../assets/TastyTracks.png"
import useOnline from "../utils/useOffline";
import { useSelector,useDispatch } from "react-redux";
import { logout,signIn } from "../utils/loginSlice";
import { clearCart } from "../utils/cartSlice";
import {useNavigate} from 'react-router-dom';


const Title = () =>(
    <a href="/"><img className="logo" src={logo} alt="TastyTracks" /></a> 
); 

const Header =()=>{
    const isonline = useOnline();
    const user = useSelector((store) => store.login.user)
    const cartItems = useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector((store)=>store.login.isAuthenticated)

    const handleLogut=()=>{
        dispatch(logout());
        dispatch(clearCart());
        localStorage.removeItem('user');
        navigate('/')
    }
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user'))
        if(userData) {
            dispatch(signIn(userData))
        }
    },[dispatch,signIn])
    return <>
    <div className="header">
        <Title/>
        <div className="nav-items">
           <ul>
                <li className="flex items-center">
                    <Link className="py-1 px-2 hover:bg-red-800 hover:text-yellow-100 rounded" to='/'>Home</Link>
                </li>
                <li className="flex items-center">
                    <Link className="py-1 px-2 hover:bg-red-800 hover:text-yellow-100 rounded" to='/contact'>Contact</Link>
                </li>
                <li className="flex items-center">
                    <Link className="py-1 px-2 hover:bg-red-800 hover:text-yellow-100 rounded" to='/about'>About</Link>                
                </li>
                <li className="flex items-center">
                    <Link  className="py-1 px-2 hover:bg-red-800 hover:text-yellow-100 rounded"to='/quickMart'>QuickMart</Link>                
                </li>
                <li className="flex items-center">
                    <Link className="py-1 px-2  hover:bg-red-800 hover:text-yellow-100 rounded" to ='/cart'>Cart {cartItems.length>0?<span className="inline-block bg-gray-500 text-white rounded-full text-center text-xs h-4 w-4 items-center justify-center">{cartItems.length}</span>:null}</Link>
                </li>
            </ul> 
        </div>
        {/* <div>{isonline?<FontAwesomeIcon  icon={faCircle} style={{color: "#04950e",}} />:<FontAwesomeIcon icon={faCircle} style={{color: "#e60505",}} />}</div>  */}
        {<div> 
            { !isLogged ? <Link to="/login"><button className="login-btn">Login</button></Link>:
                <div>
                    {<span className="text-blue-320">{user?.firstName || user?.email}</span> }
                    <button className="login-btn " onClick={handleLogut} >LogOut</button>
                </div>
            }
        </div>
        }
    </div>
    </>
}
export default Header;