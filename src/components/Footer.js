import React from 'react'
import logo from "../assets/TastyTracks.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='image-container'><a href="/"><img className="logo-f" src={logo} alt="TastyTracks" /></a> </div>
      <div className='text-gray-500'>2023@Rachit.Inc</div>
    </div>
  )
}
