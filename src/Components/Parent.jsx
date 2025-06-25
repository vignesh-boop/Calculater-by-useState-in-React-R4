import React from 'react'
import Child from '../Components/Child'
import '../App.css'

function Parent() {
  return (
    <>
<div id='mainDiv'>
    <Child image = " https://images.unsplash.com/photo-1501785888041-af3ef285b470" heading ="Beuautiful Landscape"  subHeading="A stunning view of mountain during the sunset"/>
    <Child image = " https://images.unsplash.com/photo-1504384308090-c894fdcc538d" heading ="City lights"  subHeading="The blusting city at the night with light shining bright"/>

</div>
    </>

  )
}

export default Parent