import { Link } from "react-router-dom";

const Bloglist = (props) => {

    const blog = props.blogs;
    const title = props.title;
    return (

        <div className="blog-list">
            <h2>{title}</h2>
            {blog && (blog.map((item) => (
                <div className="blog-preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`}>
                    <h2 className="title">{item.title}</h2>
                    <h4>By: {item.author}</h4>
                    </Link>
                </div>
            )))
            }
        </div>);

}

export default Bloglist;