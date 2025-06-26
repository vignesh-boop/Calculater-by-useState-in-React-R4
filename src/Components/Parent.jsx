import React from 'react'
import commerse from './asserts/commerse.png'
import '../App.css'
import PasswordHideShow from './PasswordHideShow';

function Parent() {

const handleSubmit = (e)=>{
  e.preventDefault();
  alert("form subbmited")
}
   
  return (
    <>
    <div id='mainDiv'>
      <div id='centerMainDiv'>
    <img src={commerse} alt="image" id='image'/>  

<form onSubmit={handleSubmit}>
    <div id='contentMainDiv'>
      <p id='topPara'>Sign in or create account</p>

      <div id='emailOrMobileNumber'>
      <label>Email or mobile number</label><br />
      <input type="text" pattern='^([a-z]+@[a-z]+\.[a-z]{2,})|(\d{10})$' title='Enter the valid email' required/>
      </div>
{/* "^([6-9]\d{9}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$" */}
{/* Password hiding and showing */}

  <PasswordHideShow/>

      <button id='continueButton' type='submit'>Continue</button>
      <div id='ancorText'>
      <p ><a href="#" className='belowparagraph'>Login Business Account?</a></p>
      <p ><a href="#" className='belowparagraph'>Go Back</a></p>

      </div>

    </div>

    </form>
    {/* content below to the center div */}

    <div id='newToAmazonDiv'>
      <hr />
      <p id='newToAmazonText'>New to Amazon?</p>
    </div>

    <button id='createNewAccount'>CREATE NEW ACCOUNT</button>

      </div>
    </div>
    </>
  )
}

export default Parent