//Create a component that shows a button when the user scrolls down a certain distance.
// Requirements:
// •	Use useEffect to add a scroll event listener.
// •	Update state to show/hide the button based on scroll position.
// •	Clean up the event listener when the component unmounts.
import { useState,useEffect } from "react"
export const Scroll=()=>{
const[position,setPosition]=useState(false);
useEffect(()=>{
    const handle=()=>{
        if(window.scrollY>200){
            setPosition(true)
        }
        else{
            setPosition(false)
        }

    } 
    window.addEventListener("scroll",handle);
    return()=>{
       window.removeEventListener("scroll", handle);
    }
},[])
    return(
        <div>
           {position &&<button>onscroll</button>}
           <h1>shows a button when the user scrolls down a certain distance</h1>
        </div>
    )
}
