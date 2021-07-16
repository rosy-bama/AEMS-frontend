import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aemsLogo from '../../assets/aems-logo-trimed.svg';

function Template({ children, heading, isRevers }) {
    const [revers, setRevers] = useState('');

    useEffect(() => {
        if (isRevers) setRevers('revers');
    }, []);

    return (
        <div className='bg-template-container'>
            <div className='template-container'>
                <div className={`grid ${revers}`}>
                    <div className='img-block col-lg-6 col-md-6 col-sm-4 col-xs-12'>
                        <div className='block-container'>
                            <p>
                                <Link to='/'>
                                    <img className='logo' src={aemsLogo} alt='aems-logo' />
                                </Link>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium corporis!</p>
                        </div>
                    </div>

                    <div className='action-block col-lg-6 col-md-6 col-sm-8 col-xs-12'>
                        <h1>{heading}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;
