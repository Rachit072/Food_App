import React from 'react'
import "./Shimmer.css"

export default function Shimmer() {
  return (
    // <div>
    //   <h1>Loading.....</h1>
    // </div>
     <div className="shimmer-card">
     <div className="shimmer-content">
       <div className="shimmer-line shimmer-line-short"></div>
       <div style={{fontWeight:"bold",color:"red"}}></div>
       <div className="shimmer-line shimmer-line-long"></div>
     </div>
   </div>
  )
}
