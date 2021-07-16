import React, { useEffect, useState } from 'react';
import Input from '../utils/Input';
import SearchTableApp from '../utils/Table';
import Layout from './Layout';

// Data to pass to our List elements
const roleData = [
    { id: 1, name: 'Doe', no_employees: 2, salary: 1000 },
    { id: 2, name: 'Doe', no_employees: 1, salary: 20000 },
    { id: 3, name: 'Doe', no_employees: 4, salary: 100000 },
    { id: 4, name: 'Doe', no_employees: 0, salary: 1000000 },
];

let new_id = 4;

const Position = () => {
    const [state, setState] = useState(roleData);
    const [newRole, setNewRole] = useState('');

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

    const handleChange = (event) => setNewRole(event.target.value);

    const handleAddPosition = () => {
        if (!newRole) return;

        const new_role_obj = { id: new_id + 1, name: newRole, no_employees: 1, salary: 0 };
        setState([...state, new_role_obj]);

        setNewRole('');
    };

    const data = Object.values(state).map((role, i) => {
        role['action'] = (
            <div className='actions'>
                <div className='flex justify-space-evenly align-center'>
                    <div className='btn table-action primary-bg'>edit</div>
                    <div className='btn table-action danger-bg' onClick={() => handleOnDelete(i)}>
                        delete
                    </div>
                </div>
            </div>
        );

        return role;
    });

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    return (
        <div>
            <Layout isOwner={true}>
                <div className='employee-container'>
                    <div className='flex align-center justify-flex-end'>
                        <Input type='text' name='role' placeholder='add new role' value={newRole} onChange={handleChange} />
                        <div className='btn primary-bg mg-l-10' onClick={handleAddPosition}>
                            Add New Position
                        </div>
                    </div>
                    <SearchTableApp data={data} className='col-lg-12 col-md-12 col-sm-12 col-xs-12' />
                </div>
            </Layout>
        </div>
    );
};

export default Position;
