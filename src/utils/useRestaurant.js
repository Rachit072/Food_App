import { useEffect, useState } from "react";

const useRestaurant =(id)=>{

    const [restaurant,setRestaurant] = useState(null);

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
    return restaurant;
}
export default useRestaurant;