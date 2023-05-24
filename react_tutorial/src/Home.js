import { useState } from "react";

const Home = () => {
    const [blog, setBlog] = useState([{ title: 'Brand new Me', author: 'Umer', content: 'Once upon a time...', id: 1 },
    { title: 'The Truth', author: 'Nisar', content: 'Dark reality...', id: 2 },
    { title: 'Defining', author: 'Umer', content: 'Never let...', id: 3 }])

    return (
        <div className="home>">
            {blog.map((item) => (
            <div className="blog-preview" key={item.id}>
                <h2 className="title">{item.title}</h2>
                <h4>By: {item.author}</h4>
                <p>{item.content}</p>
            </div>
            ))
            }
        </div>
    );
}

export default Home;