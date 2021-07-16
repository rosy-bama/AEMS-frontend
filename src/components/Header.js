import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import aemsLogo from '../assets/aems-logo-trimed.svg';

export function Header({ getStarted }) {
    const linkStyle = {
        color: '#333',
        textDecoration: 'none',
    };

    let index = window.location.pathname.split('/').indexOf('dashboard') + 1;
    const company_name = window.location.pathname.split('/')[index];

    return (
        <Fragment>
            <header className='header'>
                <div className='logo'>
                    <Link to='/' style={linkStyle}>
                        <img className='logo' src={aemsLogo} alt='logo' />
                    </Link>
                </div>
                {getStarted ? (
                    <ul className='side-links'>
                        <Link to='/login' style={linkStyle}>
                            <li>Login</li>
                        </Link>
                        <Link to='/signup' style={linkStyle}>
                            <li className='get-started'>Get Started</li>
                        </Link>
                    </ul>
                ) : (
                    <h1 className='nav-name'>{company_name}</h1>
                )}
            </header>
        </Fragment>
    );
}

export function Footer() {
    return (
        <div>
            <footer>footer</footer>
        </div>
    );
}
