import axios from "axios";
import { useEffect,useState } from "react";
const Post=()=>{
    const[post,setPost]=useState([]);
    useEffect(()=>{
        getPosts();
    },[])
    const getPosts=()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            setPost(res.data);
            // console.log(post);
        })
        .catch((err)=>console.log(err))
    };
    return(
        <div>
            <h1>Post</h1>
            <ul>
                {post.map((post)=>(
                    <li key={post.id}>title:{post.title},
                    <div>body:{post.body}</div>
                    <hr/>
                    <br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Post;