import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    const location = useLocation();
    let buttonText = 'Contact List';
    let redirectToPath = "/";
    if (location.pathname === '/') {
        buttonText = 'Add Contact';
        redirectToPath = '/add';
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="rm-anchor-behavior">
                    <span className="navbar-brand">Contact App</span>
                </Link>
                <Link to={redirectToPath}>
                    <button type="button" className="btn app-btn app-btn-shadow">{buttonText}</button>
                </Link>
            </div>
        </nav>
    );
}

export default Header