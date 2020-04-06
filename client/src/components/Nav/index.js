import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import './style.css';

const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to='/'><i className="fas fa-book-open" /> React Bookshelf</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link">My Bookshelf</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {!isAuthenticated && (<button className='btn btn-success' onClick={() => loginWithRedirect({})}>Log in</button>)}
                            {isAuthenticated && <button className='btn btn-danger'onClick={() => logout()}>Log out</button>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
