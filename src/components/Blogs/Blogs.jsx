import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
    fetch('example.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 border-2 border-red-500 mx-auto">
           <p>Blogs</p>
        </div>
    );
};

export default Blogs;