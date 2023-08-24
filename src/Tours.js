import React from 'react'
import './Tours.css'
import Tour from './Tour';

const Tours = ({data, removeTour}) => {
  return (
    <div className='Tours-container'>
     <div className='Tours-container-title'>
        <h2>Our Tours</h2>
        <div className="underline"></div>
     </div>

     <div className='Tours-container-content'>
        {data.map((tour)=>{
            return <Tour key={tour.id} {...tour}  removeTour={removeTour} />
        })}
     </div>
    </div>
  )
}

export default Tours
