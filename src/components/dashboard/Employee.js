import React, { Fragment, useState } from 'react';
import Input from '../utils/Input';
import Modal from '../utils/Modal';
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
    const [modal, setModal] = useState({ edit_employee: false });
    const [employeeId, setEmployeeId] = useState(null);
    const [employee, setEmployee] = useState(null);

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

    const handleOnEdit = (id) => {
        setEmployeeId(id);
        setModal({ edit_employee: true });

        const empObject = Object.values(state).filter((emp, i) => i === employeeId)[0];
        setEmployee(empObject);
    };

    const handleChange = (event) => setEmployee({ ...employee, [event.target.name]: event.target.value });

    const handleEmployeeUpdate = () => {
        const newObj = Object.values(state).map((emp, i) => {
            const dataArr = [];
            if (i === employeeId) {
                dataArr.push(employee);
            } else {
                dataArr.push(emp);
            }

            return dataArr[0];
        });

        setState(newObj);
        setModal({ ...modal, close: true });
        setEmployee(null);
        setEmployeeId(null);
    };

    const data = Object.values(state).map((role, i) => {
        role['action'] = (
            <div className='actions'>
                <div className='flex justify-space-evenly align-center'>
                    <div className='btn table-action secondary-bg'>approved</div>
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
            {modal.edit_employee && employee && (
                <Modal title='Edit Employee' modal={modal} setModal={setModal} modalSize='1000px'>
                    <Input type='text' onChange={handleChange} name='firstname' label='First Name' value={employee?.firstname} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='lastname' label='Last Name' value={employee?.lastname} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='role' label='Role' value={employee?.role} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='email' label='Email Address' value={employee?.email} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='contact' label='Contact' value={employee?.contact} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='department' label='Department' value={employee?.department} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='manager' label='Manager' value={employee?.manager} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <Input type='text' onChange={handleChange} name='salary' label='Salary' value={employee?.salary} className='col-lg-6 col-md-6 col-sm-6 col-xs-12' />
                    <div className='btn-container col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='div-btn primary-bg' onClick={handleEmployeeUpdate}>
                            Save Changes
                        </div>
                    </div>
                </Modal>
            )}
            <Layout isEmployee={true}>
                <div className='employee-container'>
                    <SearchTableApp data={data} search className='col-lg-12 col-md-12 col-sm-12 col-xs-12' />
                </div>
            </Layout>
        </Fragment>
    );
}

export default Employee;
