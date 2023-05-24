import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blog, setBlog] = useState([{ title: 'Brand new Me', author: 'Umer', content: 'Once upon a time...', id: 1 },
    { title: 'The Truth', author: 'Nisar', content: 'Dark reality...', id: 2 },
    { title: 'Defining', author: 'Umer', content: 'Never let...', id: 3 }]);
    const handledelete=(id)=>{
    const newblog = blog.filter(blog=>blog.id !==id);
    setBlog(newblog);
    }
    useEffect(()=>{console.log('use effect')})
    return (
        <div className="home>">
        <Bloglist blogs={blog} title='Available Blogs:' handledelete={handledelete}/> 
        </div>
    );
}

export default Home;