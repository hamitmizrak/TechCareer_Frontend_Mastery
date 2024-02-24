// rcc 

// Component
import {  useState } from "react";

function FunctionCompontentsTutorials(props) {

    // State
const [count,setCount]= useState(0);

    // cdm

    // Event 
   const countPlusHandleClick=()=>{
        setCount(count+1);
    } //end event

  const  countMinusHandleClick=()=>{
        setCount(count-1);
    } //end event


        return(
            <div>
            <h1> Function Compontent</h1>
            <p> Count: {count}</p>
            <button className="btn btn-primary" onClick={countPlusHandleClick}>+</button>
            <button className="btn btn-danger ms-2" onClick={countMinusHandleClick}>-</button>
            </div>
        );
} //end ClassCompontentsTutorials

export default FunctionCompontentsTutorials;