import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                        to="/percusion"
                    >
                        Percusion
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                        to="/viento"
                    >
                        Viento
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="btn btn-secondary" 
                        onClick={ handleLogout }
                        to="/login"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}