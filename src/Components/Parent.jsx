import React from 'react'
import {useState} from 'react'
import "../App.css"
function Parent() {

    let [current,future]=useState(0);
    let increaseHovering =()=>{
        future(tempInc => tempInc+1);
    }

    let decreasingHovering =()=>{
        future(tempDec=>tempDec-1);
    }


  return (
    <>
    <h1 id='heading'>Temperature Indication System</h1>
    <div id='mainDiv'>
    <div className="boardDiv">

        <div id='bigCircleDiv'> {current} C <sup>0</sup></div>

        <div id='overallControllerDiv'>
        <div className='controllingDiv' onMouseMoveCapture={increaseHovering}>+</div>
        <div className='controllingDiv'onMouseMoveCapture={decreasingHovering}>-</div>

        </div>
    </div>
    </div>

    </>
  )
}

export default Parent