import React from 'react'
import '../Styles/Calculator.css'
import {useState} from 'react'

function Calculater() {
    

    let [firstNumber,setFirstNumber]=useState("");
    

    let [secondNumber,setSecondNumber]=useState("");
   

    let [resultNumber,setResultNumber]=useState("");
    

    function valdtion(){
        if(firstNumber=="" || secondNumber==""){
            return false;
        }
        return true;
    }
    
    function addition(){
        
        if(valdtion()){
            setResultNumber(Number(firstNumber) + Number(secondNumber));
            
        }else{
            alert("Please fill the input boxes");
        }
    }
    
    function subracction(){
        
        if(valdtion()){
            setResultNumber(firstNumber-secondNumber);
        
        }else{
            alert("Please fill the input boxes");
        }
    }
    
    function multiplication(){
        
        if(valdtion()){
            
            setResultNumber (firstNumber*secondNumber);
        }else{
            alert("Please fill the input boxes");
        }
    }
    
    function divition(){
        
        if(valdtion()){
            setResultNumber(firstNumber/secondNumber);
        }else{
            alert("Please fill the input boxes");
        }
    }

  return (
    <>
    <div id='heightWeidthDiv'>
        <div id="contentDiv">
            <h1>CALCULATOR</h1>
            <div id='inputDiv'>
            <div className='firstSecondInputResultDiv'>
                <label>ENTER THE FIRST NUMBER</label>
                <input type="number"
                value={firstNumber}
                onChange={(e)=>setFirstNumber(e.target.value)}
                />
            </div>
            <div className='firstSecondInputResultDiv'>
                <label>ENTER THE SECOND NUMBER</label>
                <input type="number"
                value={secondNumber}
                onChange={(e)=>setSecondNumber(e.target.value)}
                />
            </div>

                <div className='firstSecondInputResultDiv'>                
                <label>RESULT</label>
                <input type="number" readOnly
                value={resultNumber}
                />
                </div>

            <div id='buttonOverallDiv'>
                <button className='arethematicButtons' onClick={addition}>+</button>
                <button className='arethematicButtons' onClick={subracction}>-</button>
                <button className='arethematicButtons' onClick={multiplication}>*</button>
                <button className='arethematicButtons' onClick={divition}>/</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculater