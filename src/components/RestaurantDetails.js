import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import star from '../assets/star.png'


const RestaurantDetails=()=>{
    const [restaurant,setRestaurant] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
        id)
        const json =  await data.json();
        console.log(json);
        setRestaurant(json.data);
    } 

   return (!restaurant)?
   (<Shimmer/>)
   :(
    <div className="MenuContainer">
        <div>
            <h1> Restaurant Id : {id}</h1>
            <h1>{restaurant.cards[0].card.card.info.name}</h1>
            <img style={{width:"280px",height:"150px",objectFit:"cover"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId} alt="img" />
            <p>{restaurant.cards[0].card.card.info.avgRating} 
                <img style={{width:"14px"}} src={star} alt="star" /> 
            </p>
            <p style={{color:"grey",textOverflow:"ellipsis",overflow:"hidden",width:"200px",whiteSpace: "nowrap" }}>{restaurant.cards[0].card.card.info.cuisines.join(", ")}</p>
            <p>{restaurant.cards[0].card.card.info.locality}</p>
        </div>
        <div className="Menu">
            <h1>Menu</h1>
            <ul>
                {
                (restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info).map((item)=>{
                    <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
        
    </div>
   ) 
}
export default RestaurantDetails;