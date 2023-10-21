import { useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantDetails=()=>{
    const [restaurant,setRestaurant] = useState({});

   return (!restaurant)?<Shimmer/>:(
    <div>
        <h1>Restaurnat Name</h1>
    </div>
   ) 
}
export default RestaurantDetails;