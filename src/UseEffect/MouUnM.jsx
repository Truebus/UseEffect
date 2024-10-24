//Component Mount and Unmount
// Task: Create a component that logs messages when it mounts and unmounts.
// Requirements:
// •	Use useEffect to log a message to the console when the component mounts.
// •	Return a cleanup function that logs another message when the component unmounts.

import { useState,useEffect } from "react";
export const MouUnM=()=>{
    const[data,setData]=useState('Versha')
    const handle=(e)=>{
        setData(e.target.value);
    }
    useEffect(()=>{
        console.log("component mount")
        return()=>{
            console.log("component unmount")
     }
    },[])
    return(
        <div>
            <h3>component that logs messages when it mounts and unmount</h3>
            <input type="text" onChange={handle} value={data}/>
        </div>
    )
}