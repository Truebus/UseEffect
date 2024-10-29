//Create a component that fetches user data from an API (e.g., JSONPlaceholder) when it mounts and displays 
//the user’s name and email. Handle loading and error states.
// Requirements:
// •	Use useEffect to fetch data when the component mounts.
// •	Display loading text while data is being fetched.
// •	Display an error message if the fetch fails.
import { useState,useEffect } from "react"
export const FetchData=()=>{
    const[data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(true)
    // console.log(data)
    useEffect(()=>{
        const getdata=async()=>{
            try{
            const data=await fetch(" https://jsonplaceholder.typicode.com/posts");
            if(!data.ok){
                throw new Error("You got mistake");
            }
            const response=await data.json();
            setData(response);
            }
            catch(err){
                console.log(err.message);
            }
        }
        getdata();
    },[])
    return(
        <div>
            <h1>Create a component that fetches user data from an API (e.g., JSONPlaceholder) when it mounts and displays 
            the users name and email. Handle loading and error states.</h1>
            {isLoading && <p>Loading.....</p>}
        {data.map((x)=>(
            <div>
            <p key={x.id}>{x.title}</p>
            </div>
        ))}
        </div>
    )
}