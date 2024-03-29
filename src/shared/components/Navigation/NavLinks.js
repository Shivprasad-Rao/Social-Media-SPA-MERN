import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import Button from '../FormElements/Button';
import './NavLinks.css';

const NavLinks = (props) => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact={true}>
                    All Users
                </NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink to={`/${auth.userId}/places`}>
                    My Places
                </NavLink>
            </li>}
            {auth.isLoggedIn && < li >
                <NavLink to="/places/new">
                    New Place
                </NavLink>
            </li>}
            {!auth.isLoggedIn && < li >
                <NavLink to="/auth">
                    Authenticate
                </NavLink>
            </li >}
            {auth.isLoggedIn && (
                <li>
                    <Button onClick={auth.logout}>Logout</Button>
                </li>
            )}
        </ul >
    );
};

export default NavLinks;