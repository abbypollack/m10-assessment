import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" id="home" to="/">Home</NavLink>
                <div className="navbar-header">
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapsibleNavbar" 
                    aria-expanded="false" aria-label="Toggle Navigator">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" id="linkAgents" to="/characters">Characters</NavLink>
                    </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
}

export default Nav;