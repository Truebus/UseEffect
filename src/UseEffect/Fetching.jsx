//Create a functional component that fetches data from https://jsonplaceholder.typicode.com/posts 
//when the component mounts and displays the titles of the posts in a list.
import { useEffect,useState} from "react"
export const FetchingData=()=>{
   const[showdata,setShowdata]=useState([]);
   useEffect(()=>{
    async function getdata(){
        const getdetails=await fetch("https://jsonplaceholder.typicode.com/posts");
        const getresponse=await getdetails.json();
        setShowdata(getresponse); 
       }
       getdata();
   },[])
    return(
        <div>
             <ul>
    {showdata.map((x)=>(
            <li key={x.id}>{x.title}</li>
    ))}
         </ul>
        </div>
    )
}