import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { Link } from 'react-router-dom';

const Header = () => {
    const {onLogout, user} = useContext(AuthContext);

    const guestNav = (
        <ul>
            <li><a href="/">Home</a></li>
            <li>
                <a href="catalogue">Catalogue</a>
                <ul>
                    <li><a href="">Show all</a></li>
                    <li><a href="#">Categories</a>
                        <ul>
                            <li><a href="#">Prophet rev2</a></li>
                            <li><a href="#">Korg microkorg</a></li>
                            <li><a href="#">Arturia</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    );

    const userNav = (
        <ul>
                    <li className="welcome">Welcome {user.email}</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="my-sounds">My Sounds</a></li>
                    <li>
                        <a href="catalogue">Catalogue</a>
                        <ul>
                            <li><a href="">Show all</a></li>
                            <li><a href="#">Categories</a>
                                <ul>
                                    <li><a href="#">Prophet rev2</a></li>
                                    <li><a href="#">Korg microkorg</a></li>
                                    <li><a href="#">Arturia</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/" onClick={onLogout}>Logout</Link></li>
                </ul>
    )
    return (
        <header className="header">
            <h1 className="site-title">Site title</h1>
            <label id="toggle" htmlFor="main-nav-toggle">Menu</label>
            <nav className="main">
                {user._id
                ? userNav
                : guestNav
                }
            </nav>
        </header>
    )
}

export default Header;