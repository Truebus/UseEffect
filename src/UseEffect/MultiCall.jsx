//Multiple useEffect Calls
// Question: Create a component that fetches user data and posts data from two different APIs. 
//Display the data side by side.
// Requirements:
// •	Use two separate useEffect calls to fetch the user data and post data when the component mounts.
// •	Handle loading and error states for both fetch calls independently.
import { useState,useEffect } from "react"
export const MultiCall=()=>{
    const[storevalue1,setStoreValue1]=useState([]);
    const[Isloading1,setIsLoading1]=useState(true);
    const[storevalue2,setStoreValue2]=useState([]);
    const[Isloading2,setIsLoading2]=useState(true);
    useEffect(()=>{
        const getdata1=async()=>{
            if(setIsLoading1){
            const fetchdata=await fetch("https://jsonplaceholder.typicode.com/users");
            const getresonse=await fetchdata.json();
            setStoreValue1(getresonse);
            }
        }
        getdata1();
    },[])
    useEffect(()=>{
        const getdata2=async()=>{
            if(setIsLoading2){
            const fetchdata=await fetch("https://jsonplaceholder.typicode.com/posts");
            const getresonse=await fetchdata.json();
            setStoreValue2(getresonse);
            }
        }
        getdata2();
    },[])
    return(
        <div>
          <h1>Create a component that fetches user data and posts data from two different APIs. </h1>  
         {Isloading1 && <p>Loading.......</p>}
          {storevalue1.map((x)=>(
            <p key={x.id}>{x.name}</p>
          ))}
          <div>
          {Isloading2 &&<p>Loading2....</p>}
          {storevalue2.map((x)=>(
            <p key={x.id}>{x.title}</p>
          ))}
          </div>
        </div>
    )
}