import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <h1 className="site-title">Site title</h1>
            <label id="toggle" htmlFor="main-nav-toggle">Menu</label>
            <nav className="main">
                <ul>
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
                        {/* <ul>
                            <li><a href="#">Men</a>
                                <ul>
                                    <li><a href="#">Large</a></li>
                                    <li><a href="#">Medium</a></li>
                                    <li><a href="#">Small</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Women</a>
                                <ul>
                                    <li><a href="#">Large</a></li>
                                    <li><a href="#">Medium</a></li>
                                    <li><a href="#">Small</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Kids</a>
                                <ul>
                                    <li><a href="#">Large</a></li>
                                    <li><a href="#">Medium</a></li>
                                    <li><a href="#">Small</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;