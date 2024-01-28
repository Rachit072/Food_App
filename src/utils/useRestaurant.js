import { useEffect, useState } from "react";
import { swiggy_menu_api } from "../config.js";

const useRestaurant =(id)=>{

    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(swiggy_menu_api + id)
        const json =  await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    return restaurant;
}
export default useRestaurant;