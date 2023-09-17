import React from 'react'
import { restaurantList } from '../config'
import {RestaurantCard }from './RestaurantCard'


export default function Body() {
  return (
    <div className='restaurant-List'>
     { restaurantList.map((restaurant)=>{
      return <RestaurantCard {...restaurant.info}/>
     })

     }
    </div>
  )
}
