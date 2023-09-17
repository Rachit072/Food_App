import React from 'react'
import { IMG } from '../config'
import star from "../Images/star.png"

export const RestaurantCard=({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    locality
})=> {
  return (
    <div className='card'>
      <img style={{width:"280px",height:"150px",objectFit:"cover"}} src={IMG+cloudinaryImageId} alt="img" />
      <p style={{fontWeight:"bold"}}>{name}</p>
      <p>{avgRating} <img style={{width:"14px"}} src={star} alt="star" /> </p>
      <p style={{color:"grey",textOverflow:"ellipsis",overflow:"hidden",width:"200px",whiteSpace: "nowrap" }}>{cuisines.join(", ")}</p>
      <p>{locality}</p>
    </div>
  )
}
