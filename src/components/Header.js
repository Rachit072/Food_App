import { useState } from "react";
import logo from "../Images/TastyTracks.png"

const Title = () =>(
    <a href="/"><img className="logo" src={logo} alt="TastyTracks" /></a> 
); 



const Header =()=>{
    const [searchInput,setSearchInput] = useState("")


    return <>
    <div className="header">
        <Title/>
        <div className="searchbar-container">
            <input className="searchbar" type="text" 
                value={searchInput}
                placeholder="Search For Restaurant, Cuisine or Dish....."
                onChange={(e)=>setSearchInput(e.target.value)}
            />
        </div>
        <div className="nav-items">
           <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul> 
        </div>
    </div>
    </>
}
export default Header;