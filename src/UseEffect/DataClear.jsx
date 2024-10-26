//Create a component that fetches data and cancels the fetch if the component unmounts.
// Requirements:
// •	Use useEffect to fetch data from an API.
// •	Implement a cleanup function that cancels the fetch if the component unmounts.
import { useState,useEffect } from "react";
export const DataClear=()=>{
    const[store,setStore]=useState([]);
    useEffect(()=>{
        const controlrequest=new AbortController();
        const signal=controlrequest.signal;
       const handle=async()=>{
        const data= await fetch("https://jsonplaceholder.typicode.com/users",{signal});
        const response= await data.json();
        setStore(response);
       }
       handle();
       return()=>{
        controlrequest.abort();
        alert("componenet unmount")
       }
    },[])
    return(
        <div>
            <h1>fetches data and cancels the fetch if the component unmounts</h1>
            {store.map((x)=>(
                <p key={x.id}>{x.name}</p>
            ))}
        </div>
    )
}
