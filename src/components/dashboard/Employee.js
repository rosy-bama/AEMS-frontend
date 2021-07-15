import React from 'react';
import SearchTableApp from '../utils/Table';
import Layout from './Layout';

function Employee() {
    return (
        <Layout isEmployee={true}>
            <div className='employee-container'>
                <SearchTableApp className='col-lg-12 col-md-12 col-sm-12 col-xs-12' />
            </div>
        </Layout>
    );
}

export default Employee;
