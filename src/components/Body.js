import React,{useEffect, useState} from 'react'
import {swiggy_api } from '../config'
import {RestaurantCard }from './RestaurantCard'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom';
import { filterData } from '../utils/utils';
import useOnline from '../utils/useOffline';

export default function Body() {
  const [searchInput,setSearchInput] = useState("");
  const [restaurants,setRestaurants] = useState([])
  const [filteredRestaurants,setFilteredRestaurants] = useState([])
  
  useEffect(()=>{
    getRestaurants();
  },[])

  const getRestaurants = async () => {
    try {
      const response = await fetch(swiggy_api);
      const data = await response.json();
      // if (data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        setRestaurants(data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // } else {
      //   console.error("Expected data not found in the response.");
      // }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  const online = useOnline();
  if(!online){
      return (
          <h1>Check Your Internet Connection!</h1>
      )
  }
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const handleSearch = debounce((term) => {
    const data = filterData(term, restaurants);
    setFilteredRestaurants(data);
  }, 1000);
  

  return  !restaurants || restaurants.length === 0 ? (<Shimmer/>
    ): (
    <>
     <div className="searchbar-container">
        <input className="searchbar p-2 m-2 border" type="text" 
                value={searchInput}
                placeholder="Search For Restaurant, Cuisine or Dish....."
                onChange={(e)=>
                  { const searchTerm = e.target.value
                    setSearchInput(searchTerm)
                    handleSearch(searchTerm)
                  }
                }
        />
        {/* <button className="searchbtn"
          onClick={()=>{
            const data = filterData(searchInput,restaurants)
            setFilteredRestaurants(data)
          }}
        >Search</button> */}
      </div>
      <div className='restaurant-List'>
      { filteredRestaurants.map((restaurant)=>{
          return (
            <Link to={'/restaurant/'+ restaurant?.info?.id} key={restaurant?.info?.id}> 
              <RestaurantCard {...restaurant.info}/>
            </Link>
      );
      })}
    </div>
  </>)
}
