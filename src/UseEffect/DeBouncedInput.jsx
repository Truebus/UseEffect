//Debounced Input
// Task: Create an input field that updates a displayed value with a delay (debouncing).
// Requirements:
// •	Use useState to store the input value.
// •	Use useEffect to update the displayed value only after a specified delay (e.g., 500ms).
// •	Clear the timeout when the input changes or the component unmounts.
import { useState,useEffect } from "react";
export const Debounced=()=>{
    const[value,setValue]=useState([]);
    const[data,setData]=useState('Versha');
    const handle=(e)=>{
        setData(e.target.value);
    }
    useEffect(()=>{
        let a=setTimeout(()=>{
    setValue(prev=>[...prev,data]);
    setData('')
        },500)
        return()=>{
            clearTimeout(a)
        }
    },[data])
    return(
        <div>
            <h1>Debounced Input</h1>
            <input type="text" onChange={handle} value={data}/>
        {value.map((x,index)=>(
            <h1 key={index}>{x}</h1>
        ))}

        </div>
    )
}
