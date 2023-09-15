import logo from "../Images/TastyTracks.png"

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
export default Header;