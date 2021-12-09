
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

    const { onLogout, user } = useContext(AuthContext);

    const guestNav = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>
                <Link to="/catalog">Catalogue</Link>
                <ul>
                    <li><Link to="/catalog/categories">Show by categories</Link></li>
                    {/* <li><a href="#">Categories</a>
                        <ul>
                            <li><Link to="catalog/prophet-rev2">Prophet rev2</Link></li>
                            <li><a href="#">Korg microkorg</a></li>
                            <li><a href="#">Arturia</a></li>
                        </ul>
                    </li> */}
                </ul>
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    );

    const userNav = (
        <ul>
            <li className="welcome">Welcome {user.email}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="my-sounds">My Sounds</Link></li>
            <li>
                <Link to="catalog">Catalogue</Link>
                <ul>
                    <li><Link to="/catalog/categories">Show by categories</Link></li>
                    {/* <li><a href="#">Categories</a>
                        <ul>
                            <li><a href="#">Prophet rev2</a></li>
                            <li><a href="#">Korg microkorg</a></li>
                            <li><a href="#">Arturia</a></li>
                        </ul>
                    </li> */}
                </ul>
            </li>
            
            <li><Link className="button" to="/logout">Logout</Link></li>
        </ul>
    )
    return (
        <header className="header">
            <Link className="site-title" to='/'><h1 className="site-title"><i className="fas fa-record-vinyl"></i> share your sounds</h1></Link>
            <label id="toggle" htmlFor="main-nav-toggle">Menu</label>
            <nav className="main">
                {user.email
                    ? userNav
                    : guestNav
                }
            </nav>
        </header>
    )
}

export default Header;