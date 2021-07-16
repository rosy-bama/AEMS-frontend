import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Input from '../utils/Input';
import Template from './Template';

function CompanySignup() {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        start_date: '',
        company_name: '',
        number_of_employees: '',
        password: '',
    });
    const [isCompleted, setIsCompleted] = useState(false);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // make request with Data

        setIsCompleted(true);
        console.log(state);
    };

    const attribs = {
        onChange: handleChange,
    };

    return isCompleted ? (
        <Redirect to='/email-verification' />
    ) : (
        <Template heading={'Create Company Account'}>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='name grid'>
                    <Input type='text' name='first_name' placeholder='first_name' label='First Name' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />
                    <Input type='text' name='last_name' placeholder='last_name' label='Last Name' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />
                </div>

                <div className='contact grid'>
                    <Input type='email' name='email' placeholder='company@example.com' label='Email' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />
                    <Input type='text' name='phone' placeholder='+237 600000000' label='Phone Number' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />
                </div>

                <div className='company-info grid'>
                    <Input type='text' name='company_name' placeholder='Company name' label='Company Name' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />

                    <div className='input select-box col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <label className='input-label'>Number of Employees</label>
                        <select name='number_of_employees' value={state.number_of_employees} className='_input select_input' {...attribs}>
                            <option></option>
                            <option value='0 to 20'>0 to 20</option>
                            <option value='21 to 50'>21 to 50</option>
                            <option value='51 to 100'>51 to 100</option>
                            <option value='101+'>101+</option>
                        </select>
                    </div>
                </div>

                <Input type='password' name='password' placeholder='password' label='Password' className='col-lg-6 col-md-6 col-sm-12 col-xs-12' {...attribs} />

                <div className='button'>
                    <button className='submit-button' type='submit'>
                        Signup
                    </button>
                </div>
                <p className='extra'>
                    {' '}
                    have an account already?..
                    <Link to='/login'>login here</Link>
                </p>
            </form>
        </Template>
    );
}

export default CompanySignup;
