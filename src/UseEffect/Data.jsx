//Fetch Data from API
// Task: Create a component that fetches data from a public API when it mounts.
// Requirements:
// •	Use useEffect to fetch data from an API (e.g., a list of users).
// •	Store the fetched data in state using useState.
// •	Display the fetched data in a list format.
import { useState,useEffect } from "react"
export const Fetchdata=()=>{
    const[datashow,setDataShow]=useState([]);
    useEffect(()=>{
        const handledata=async()=>{
    const fetchdata=await fetch("https://jsonplaceholder.typicode.com/posts");
    const response=await fetchdata.json();
    setDataShow(response);
        }
        handledata();
    },[])
    return(
        <div>
         <h1>My Fetched data from API is:-</h1>
         {datashow.map((x)=>(
            <ul>
                <li key={x.id}>{x.title}</li>
            </ul>
         ))}
        </div>
    )
}