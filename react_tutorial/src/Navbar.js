import { Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' ><h4 className="main-head">Blogism</h4></Link>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;