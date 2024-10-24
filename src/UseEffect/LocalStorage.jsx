//Create a component that syncs state with local storage.
// Requirements:
// •	Use useState to hold a piece of data (e.g., a user’s name).
// •	Use useEffect to save the state to local storage whenever it changes.
// •	Retrieve the initial value from local storage when the component mounts.
import { useState,useEffect } from "react";
export const LocalStorage=()=>{
    const[data,setData]=useState(()=>{
        return localStorage.getItem("username")||"Versha";
    });
    useEffect(()=>{

          localStorage.setItem("username",data)
            console.log(data)

    },[data])
    const handledata=(e)=>{
        setData(e.target.value)
    }
    return(
        <div>
            <h3>syncs state with local storage</h3>
        <input type="text" onChange={handledata} value={data}/>
        <p>{data}</p>
        </div>
    )
}
