import React from 'react'

function Child({image,heading,subHeading}) {
  return (
    <>
   <div className='parentDiv'>
    <img src={image} alt="image" className='images'/>
    <h2>{heading}</h2>
    <p>{subHeading}</p>
   </div>
    </>
  )
}

export default Child