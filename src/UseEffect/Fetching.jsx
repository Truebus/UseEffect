//Create a functional component that fetches data from https://jsonplaceholder.typicode.com/posts 
//when the component mounts and displays the titles of the posts in a list.
//Modify the previous component to handle errors during the fetch request. Display an error message if the fetch fails.
//Question: Extend the previous component to show a loading indicator while the data is being fetched.
import { useState,useEffect } from "react";
export const Fetched=()=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        const handle=async()=>{
            try{
            const details=await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!details.ok){
                throw new Error("Oops!!")
            }
            const response=await details.json();
            setData(response);
            }
            catch(error){
                console.log(error);
            }
        }
        handle();
    },[])
    return(
        <div>
            <h1>Your fetched data is here:-</h1>
            {loading && <p>Loading...</p>} 
        {data.map((x)=>(
        <h1 key={x.id}>{x.title}</h1>
        ))}
        </div>
    )
}