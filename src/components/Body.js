import React,{useEffect, useState} from 'react'
import { restaurantList } from '../config'
import {RestaurantCard }from './RestaurantCard'
import Shimmer from './Shimmer'

function filterData(searchInput,restaurants){ 
  const filteredData = restaurants.filter((restaurant)=>
    restaurant.info.name.toLowerCase().includes(searchInput))
  return filteredData
}


export default function Body() {
  const [searchInput,setSearchInput] = useState("");
  const [restaurants,setRestaurants] = useState([])
  const [filteredRestaurants,setFilteredRestaurants] = useState([])
  
  useEffect(()=>{
    getRestaurants()
  },[])
  
  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await response.json();
      if (data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        setRestaurants(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      } else {
        console.error("Expected data not found in the response.");
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
  
  

  return restaurants.length === 0 ? (<Shimmer/>
    ): (
    <>
     <div className="searchbar-container">
        <input className="searchbar" type="text" 
                value={searchInput}
                placeholder="Search For Restaurant, Cuisine or Dish....."
                onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button className="searchbtn"
          onClick={()=>{
            const data = filterData(searchInput,restaurants)
            setFilteredRestaurants(data)
          }}
        >Search</button>
      </div>
      <div className='restaurant-List'>
      { filteredRestaurants.map((restaurant)=>{
          return <RestaurantCard {...restaurant.info}/>
      })

     }
    </div>
  </>)
}
