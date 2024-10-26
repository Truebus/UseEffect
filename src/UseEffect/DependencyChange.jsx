//API Call on Dependency Change
// Task: Build a component that fetches user details based on a user ID input.
// Requirements:
// •	Use useState to store the user ID and fetched user data.
// •	Use useEffect to fetch user data whenever the user ID changes.
// •	Display the fetched user data.

import { useState,useEffect } from "react";
export const DependencyChange=()=>{
    const[userid,setUserId]=useState('');
    const[userdata,setUserData]=useState([]);
    // console.log(userid);
    useEffect(()=>{
        const fetchdata=async()=>{
            if(userid){
            try{
            const data=await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
            if(!data){
                throw new Error("Opps");
            }
            const response=await data.json();
            setUserData(response);
            }
            catch(err){
                alert(err.message);
            }
        }
        }
        fetchdata();
    },[userid])
    const handlechange=(e)=>{
        setUserId(e.target.value);
    }
    return(
        <div>
            <h1>Dependency change</h1>
            <input type="number" required onChange={handlechange} value={userid}/>
        {userdata &&<p key={userdata.id}>{userdata.name}</p>}
        </div>
    )
}