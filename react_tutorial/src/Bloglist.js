const Bloglist = (props) => {

    const blog = props.blogs;
    const title = props.title;
    const handledelete=props.handledelete;
    return (

        <div className="blog-list">
            <h2>{title}</h2>
            {
                blog.map((item) => (
                    <div className="blog-preview" key={item.id}>
                        <h2 className="title">{item.title}</h2>
                        <h4>By: {item.author}</h4>
                        <p>{item.content}</p>
                        <button onClick={()=> handledelete(item.id)}>Delete this Blog</button>
                    </div>
                ))
            }
        </div>);

}

export default Bloglist;