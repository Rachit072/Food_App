import React from 'react'
import logo from "../Images/TastyTracks.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div><a href="/"><img className="logo-f" src={logo} alt="TastyTracks" /></a> </div>
      <div style={{color:"white",padding:"5px"}}>2023@Rachit.Inc</div>
    </div>
  )
}
