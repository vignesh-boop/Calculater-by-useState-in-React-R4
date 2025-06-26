import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'

function PasswordHideShow(imgSrc) {
    
  // useState for password hiding and showing
  
  let [showPassword,setShowPassword] = useState(false);
  let togglingFunction =()=>{
    setShowPassword(previous =>!previous);
  }

  return (
    <>
    
 <div id='password'>
      <label>Password</label><br />
      <input type={showPassword?"text":"password"}  pattern='.{8,}' title='8 character' required/>
<FontAwesomeIcon icon={showPassword?faEye:faEyeSlash} onClick={togglingFunction} id='eye'/>
</div>

    </>
  )
}

export default PasswordHideShow