import React, { Fragment, useState } from 'react';
import Input from '../utils/Input';
import Modal from '../utils/Modal';
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
    const [modal, setModal] = useState({ edit_postion: false });
    const [positionId, setPositionId] = useState(null);
    const [position, setPosition] = useState(null);

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

    const handleSetRoleChange = (event) => setNewRole(event.target.value);

    const handleAddPosition = () => {
        if (!newRole) return;

        const new_role_obj = { id: new_id + 1, name: newRole, no_employees: 1, salary: 0 };
        setState([...state, new_role_obj]);

        setNewRole('');
    };

    const handleChange = (event) => setPosition({ ...position, [event.target.name]: event.target.value });

    const handleOnEdit = (id) => {
        setPositionId(id);
        setModal({ edit_postion: true });

        const posObject = Object.values(state).filter((pos, i) => i === positionId)[0];
        setPosition(posObject);
    };

    const handleEmployeeUpdate = () => {
        const newObj = Object.values(state).map((emp, i) => {
            const dataArr = [];
            if (i === positionId) {
                dataArr.push(position);
            } else {
                dataArr.push(emp);
            }

            return dataArr[0];
        });

        setState(newObj);
        setModal({ ...modal, close: true });
        setPosition(null);
        setPositionId(null);
    };

    const data = Object.values(state).map((role, i) => {
        role['action'] = (
            <div className='actions'>
                <div className='flex justify-space-evenly align-center'>
                    <div className='btn table-action primary-bg' onClick={() => handleOnEdit(i)}>
                        edit
                    </div>
                    <div className='btn table-action danger-bg' onClick={() => handleOnDelete(i)}>
                        delete
                    </div>
                </div>
            </div>
        );

        return role;
    });

    return (
        <Fragment>
            {modal.edit_postion && position && (
                <Modal title='Edit Position' modal={modal} setModal={setModal} modalSize='1000px'>
                    <Input type='text' onChange={handleChange} name='name' label='Role' value={position?.name} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='no_employees' label='Number Of Employees' value={position?.no_employees} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='salary' label='Salary' value={position?.salary} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <div className='btn-container col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='div-btn primary-bg' onClick={handleEmployeeUpdate}>
                            Save Changes
                        </div>
                    </div>
                </Modal>
            )}

            <Layout isOwner={true}>
                <div className='employee-container'>
                    <div className='flex align-center justify-flex-end'>
                        <Input type='text' name='role' placeholder='add new role' value={newRole} onChange={handleSetRoleChange} />
                        <div className='btn primary-bg mg-l-10' onClick={handleAddPosition}>
                            Add New Position
                        </div>
                    </div>
                    <SearchTableApp data={data} className='col-lg-12 col-md-12 col-sm-12 col-xs-12' />
                </div>
            </Layout>
        </Fragment>
    );
};

export default Position;
