//Build a timer that updates every second.
// Requirements:
// •	Use useEffect to set up an interval that increments a timer.
// •	Store the timer value in state using useState.
// •	Clear the interval when the component unmounts.
import { useState,useEffect } from "react"
export const Timer=()=>{
    const[time,setTime]=useState(Math.floor(Date.now() / 1000));
    useEffect(()=>{
    let a=setInterval(()=>{
    setTime(pretime=>pretime+1);
      },1000)
      return()=>clearInterval(a);
    },[])
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    return(
        <div>
<h1>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</h1>
    </div>
    )
}