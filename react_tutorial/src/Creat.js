import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Creat = () => {
    const [title, setTitle]=useState('');
    const [content, setBody]=useState('');
    const [author, setAuhor]=useState('Umer')
    const [pending, setPending]=useState(false)
    const history=useNavigate(); // used for redirecting to a certain page

    const handleSubmit=(e)=>{
            e.preventDefault();
            const newBlog ={title,content,author};
            setPending(true)
            fetch('http://localhost:8000/blogs',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(newBlog)
            }).then(()=>{
               // alert('New Blog Added')
                setPending(false);
                history('/') // give path where you want to navigate and history a navigate will take you there like here its is taking to home page 
            })
    }
    return (
        <div className="create">
            <h1>Add a new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body: </label>
                <textarea required value={content} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author: </label>
                <select value={author} onChange={(e)=>setAuhor(e.target.value)}>
                    <option value="Umer">Umer</option>
                    <option value="Nisar">Nisar</option>
                </select>
                {!pending && <button>Add</button>}
                {pending && <button disabled>Loading...</button>}
            </form>
           
        </div>
      );
}
 
export default Creat;
