import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const Creat = () => {
    // const [title, setTitle]=useState('');
    // const [content, setBody]=useState('');
    // const [author, setAuhor]=useState('Umer')
    // const [pending, setPending]=useState(false)
    const initialState = { title: '', content: '', author: 'Umer', pending: false };
    const reducer = (state, action) => {
        switch (action.type) {
            case "setTitle":
                return {
                    ...state,
                    title: action.payload
                };
            case "setBody":
                return {
                    ...state,
                    content: action.payload
                };
            case "setAuthor":
                return {
                    ...state,
                    author: action.payload
                };
            case "setPend":
                return {
                    ...state,
                    pending: action.payload
                };
            default:
                return state;
        }
    }
    const history = useNavigate(); // used for redirecting to a certain page
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title: state.title, content: state.content, author: state.author };
        dispatch({ type: "setPend", payload: true });
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog)
        }).then(() => {
            // alert('New Blog Added')
            dispatch({ type: "setPend", payload: false });
            history('/') // give path where you want to navigate and history a navigate will take you there like here its is taking to home page 
        })
    }
    return (
        <div className="create">
            <h1>Add a new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required value={state.title} onChange={(e) => dispatch({ type: "setTitle", payload: e.target.value })} />
                <label>Blog Body: </label>
                <textarea required value={state.content} onChange={(e) => dispatch({ type: "setBody", payload: e.target.value })}></textarea>
                <label>Blog Author: </label>
                <select value={state.author} onChange={(e) => dispatch({ type: "setAuthor", payload: e.target.value })}>
                    <option value="Umer">Umer</option>
                    <option value="Nisar">Nisar</option>
                </select>
                {!state.pending && <button>Add</button>}
                {state.pending && <button disabled>Loading...</button>}
            </form>

        </div>
    );
}

export default Creat;
