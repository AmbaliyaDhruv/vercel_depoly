
import { useState } from "react"


export function Counter(prop){
  const[counter,setCounter]=useState(1);
  const counterController=(value)=>{
          setCounter(counter+value)
  }
  
    return <>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{counterController(1)}}>Increment</button>
      <br />
      <button onClick={()=>{counterController(-1)}}>Decrement</button>
      <br />
      <button onClick={()=>{
         setCounter(counter*2)
      }}>Double</button>
  </> 
}