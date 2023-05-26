import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>That page does noy exist</h2>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}
 
export default NotFound;