import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm custom-dark navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" id="home" to="/">Home</NavLink>
                <div className="navbar-header">
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                        aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" id="linkCharacters" to="/characters">Characters</NavLink>
                        </li>
                    </ul>
                </div>
                <li className="nav-item">
                    <NavLink className="btn btn-info" id="linkAdd" to="/characters/add">Add</NavLink>
                </li>
            </div>
        </nav>
    );
}

export default Nav;
