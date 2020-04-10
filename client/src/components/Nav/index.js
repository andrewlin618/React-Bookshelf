import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import './style.css';
import logo from './logo-rb.png'

const Nav = () => {
    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to='/'>
                    <img className='logo mx-2 my-0' src={logo} alt="" />
                        React Bookshelf
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                    </ul> */}
                    <ul className="ml-auto navbar-nav">
                        {isAuthenticated && 
                        <li className="nav-item">
                            <Link to="#" className="nav-link">{`Welcome, ${user.nickname}`}</Link>
                        </li>
                        }
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link">My Bookshelf</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item ml-1">
                            {!isAuthenticated && (<button className='btn btn-success' onClick={() => loginWithRedirect({})}>Log in / Sign up</button>)}
                            {isAuthenticated && <button className='btn btn-danger' onClick={() => logout()}>Log out</button>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
