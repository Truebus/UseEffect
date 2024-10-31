// Question: Build a simple timer that counts up every second. Include buttons to start, stop, and reset the timer.
// Requirements:
// •	Use useEffect to handle the timer.
// •	Ensure the timer continues to run even if the component re-renders.
// •	Provide cleanup to stop the timer when the component unmounts or when stopped.
import { useState,useEffect } from "react"
export const Timer2=()=>{
    const[storevalue,setStoreValue]=useState(0);
    const[Isrun,setIsRun]=useState(false)
    let timer;
    useEffect(()=>{
    if(Isrun){
        timer=setInterval(()=>{
    setStoreValue(prev=>prev+1);
        },1000)
        return()=>{
            clearInterval(timer);
        }
    }
    },[Isrun])
    const handlestart=()=>{
        setIsRun(true)
    }
const handlestop=()=>{
    setIsRun(false);
}
const handlereset=()=>{
    setIsRun(false);
    setStoreValue(0)
}
    return(
        <div>
            <h1>My Timer Component {storevalue}</h1>
<button onClick={handlestart}>Start</button>
<button onClick={handlereset}>Re-Start</button>
<button onClick={handlestop}>Stop</button>
        </div>
    )
}
