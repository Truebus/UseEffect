//Create a counter component that has two buttons: 
//"Increment" and "Decrement". Use useEffect to log the current count to the console whenever it changes.
import { useState,useEffect} from "react";
export const Counter=()=>{
    const[count,setCount]=useState(0);
    const handleincrement=()=>{
        setCount(count+1);
    }
    const handledecrement=()=>{
        setCount(count-1);
    }
    useEffect(()=>{
        console.log(`${count}`);
    },[count])
    return(
        <div>
            <button onClick={handleincrement}>Increment</button>
            <h3>Your Value:- {count}</h3>
            <button onClick={handledecrement}>Decrement</button>
        </div>
    )
}