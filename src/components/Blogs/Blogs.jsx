import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark,handleRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('example.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <main  className="md:w-2/3  mx-auto">
            <div>
                <p>Blogs:{blogs.length}</p>

            </div>
            <div>
                {
                    blogs.map((blog,idx)=><Blog key={idx} blog={blog} handleRead={handleRead} handleBookmark={handleBookmark} ></Blog>)
                }
            </div>
          

        </main>

    );
};

export default Blogs;