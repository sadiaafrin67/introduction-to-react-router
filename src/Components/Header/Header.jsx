import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      
      <nav>
        <h2>My Website</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        {/* <Link to="/users">Users</Link> */}
        {/* <Link to="/posts">Posts</Link> */}
      </nav>
    </div>
  );
};

export default Header;
