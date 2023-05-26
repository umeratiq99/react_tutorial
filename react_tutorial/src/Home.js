
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blog , pending, error}= useFetch("http://localhost:8000/blogs") // data:blog means data will be called blog in this file 
    return (
        <div className="home>">
            {error && <div>{error}</div>}
            {pending && <div>Loading....</div>}
            {blog && <Bloglist blogs={blog} title='Available Blogs:' />}
        </div>
    );
}

export default Home;