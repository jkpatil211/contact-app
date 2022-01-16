import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="rm-anchor-behavior">
                    <span className="navbar-brand">Contact App</span>
                </Link>
            </div>
        </nav>
    );
}

export default Header