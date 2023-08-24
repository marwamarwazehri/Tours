import React, { useState } from 'react'
import './Tour.css'

const Tour = ({id, image, info, name, price,removeTour}) => {
  const [readMore,setReadMore]=useState(false);
  return (
    <div className='tour-container'>
      <div className='tour-container-img'>
        <img src={image} alt="image" />
         </div >
         <div className='tour-container-img-content'>
            <h3>{name}</h3>
            <p>${price}</p>
         </div>

         <div className='tour-container-img-info'>
          {readMore?info:`${info.substring(0, 200)}...`}
          <button type='button' onClick={()=>setReadMore(!readMore)}>{readMore?"show less":"show more"}</button>
         </div>

         <div className='tour-container-clear'>
          <button type='button' onClick={()=>removeTour(id)}>Delete</button>
         </div>
      
      
    </div>
  )
}

export default Tour
