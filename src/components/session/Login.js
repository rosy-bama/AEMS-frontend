import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Input from '../utils/Input';
import Template from './Template';

function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const [isEmployee, setIsEmployee] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const company = JSON.parse(window.localStorage.getItem('company'));

    const handleChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoggedIn(true);
        console.log(state);
    };
    const attribs = {
        className: 'lone-set',
        onChange: handleChange,
    };

    const path = `/dashboard/${company.company_name}`;

    return isLoggedIn ? (
        <Redirect to={path}></Redirect>
    ) : (
        <Template heading={'Login'}>
            <form onSubmit={handleSubmit} className='form-container'>
                <Input type='text' name='email' placeholder='mail@example.com' label='Email' {...attribs} />

                <Input type='password' name='password' placeholder='password' label='Password' {...attribs} />

                <div className='button'>
                    <button className='submit-button' type='submit'>
                        Login
                    </button>
                </div>
                {!isEmployee && (
                    <p className='extra'>
                        {' '}
                        No acount yet ?..
                        <Link to='/signup'> signup here</Link>
                    </p>
                )}
            </form>
        </Template>
    );
}

export default Login;
