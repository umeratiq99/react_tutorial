import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetchReducer";
const Blogdetails = () => {
    const {id}=useParams();
    const history=useNavigate();
    const {  data, pending, error }=useFetch('http://localhost:8000/blogs/'+id);
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+data.id,{
            method: 'DELETE'
        }).then(()=>{
            history('/');
        })
    }

    return ( 
    <div className="blogDetails">
        {pending && <div>Loading...</div>}
        {error && <div>Error fetching the Data</div>}
        {data && 
        <article>
            <h2>{data.title}</h2>  
            <h4>Authored by: {data.author}</h4>   
            <p>{data.content}</p>
        </article>}
        <button onClick={handleDelete}>Delete</button>
    </div>
     );
}
 
export default Blogdetails;