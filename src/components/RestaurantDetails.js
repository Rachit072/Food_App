import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import star from '../assets/star.png'
import useRestaurant from "../utils/useRestaurant";
import { IMG } from "../config";

const RestaurantDetails=()=>{

    const {id} = useParams();
    const restaurant = useRestaurant(id);

    return (!restaurant)?
    (<Shimmer/>)
    :(
    <div className="MenuContainer">
        <div>
            <h1> Restaurant Id : {id}</h1>
            <h1 className="font-bold my-2 py-2">{restaurant.cards[0].card.card.info.name}</h1>
            <img className="rounded" style={{width:"280px",height:"150px",objectFit:"cover"}} src={IMG + restaurant.cards[0].card.card.info.cloudinaryImageId} alt="img" />
            <p>{restaurant.cards[0].card.card.info.avgRating} 
                <img style={{width:"14px"}} src={star} alt="star" /> 
            </p>
            <p style={{color:"grey",textOverflow:"ellipsis",overflow:"hidden",width:"200px",whiteSpace: "nowrap" }}>{restaurant.cards[0].card.card.info.cuisines.join(", ")}</p>
            <p>{restaurant.cards[0].card.card.info.locality}</p>
        </div>
        <div className="Menu">
            <h1 className="font-bold">Menu</h1>
            <ul>
                {
                restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
        
    </div>
   ) 
}
export default RestaurantDetails;