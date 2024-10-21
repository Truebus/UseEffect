//Build an input field that tracks the value entered by the user. Use useEffect to display a message in the console every time the input value changes.
import { useState,useEffect } from "react"
export const Form=()=>{
    const[value,setValue]=useState('');
    const handle=(e)=>{
        setValue(e.target.value);
    }
    useEffect(()=>{
       console.log({value})
    },[value])
    return(
        <div>
            <h1>Hello {value}</h1>
            <input value={value} onChange={handle}/>
        </div>
    )
}