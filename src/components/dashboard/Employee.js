import React, { useState } from 'react';
import SearchTableApp from '../utils/Table';
import Layout from './Layout';

// Data to pass to our List elements
const employeeData = [
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
];

function Employee() {
    const [state, setState] = useState(employeeData);

    const handleOnDelete = (id) => {
        const new_data = Object.values(state)
            .map((row, i) => {
                if (i === id) return null;
                return row;
            })
            .filter(function (el) {
                return el !== null;
            });

        setState(new_data);
    };

    const data = Object.values(state).map((role, i) => {
        role['action'] = (
            <div className='actions'>
                <div className='flex justify-space-evenly align-center'>
                    <div className='btn table-action secondary-bg'>approved</div>
                    <div className='btn table-action primary-bg'>edit</div>
                    <div className='btn table-action danger-bg' onClick={() => handleOnDelete(i)}>
                        delete
                    </div>
                </div>
            </div>
        );

        return role;
    });

    return (
        <Layout isEmployee={true}>
            <div className='employee-container'>
                <SearchTableApp data={data} search className='col-lg-12 col-md-12 col-sm-12 col-xs-12' />
            </div>
        </Layout>
    );
}

export default Employee;
