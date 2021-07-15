import React, { useState } from 'react'
import Template from './Template'
import Input from '../utils/Input'

function EmployeeSignup() {

    const [state, setState] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone": "",
        "current_post": "",
        "gender": "",
        "country": "",
        "password": ""
    })

    const [postList, setPostList] = useState(["Engineer", "Marketer", "Project Managers"])

    const handleChange = (e) => {
        if (e.target.name === "gender") {
            console.log(e.target.value);
        }
        setState({ ...state, [e.target.name]: e.target.value })
    }



    const attribs = {
        onChange: handleChange
    }

    return (
        <div>
            <Template heading="Create Account">
                <form action="" className="form-container">
                    <div className="name grid-group">
                        <Input
                            type="text"
                            name="first_name"
                            placeholder="first_name"
                            label="First Name"
                            {...attribs}
                        />
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="last_name"
                            label="Last Name"
                            {...attribs}
                        />
                    </div>
                    <div className="contact grid-group">

                        <Input
                            type="email"
                            name="email"
                            placeholder="company@example.com"
                            label="Email"
                            {...attribs}
                        />
                        <Input
                            type="text"
                            name="phone"
                            placeholder="+237 600000000"
                            label="Phone Number"
                            {...attribs}
                        />

                    </div>

                    <div className="employee_info grid-group">

                        <div className="input-group">
                            <label className="input-label">Current Post</label>
                            <select
                                name="current_post"
                                value={state.number_of_employees}
                                className="select_input"
                                {...attribs}>
                                <option></option>
                                {postList.map((employee_post) => <option value={employee_post}>{employee_post}</option>)}
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Start Date</label>
                            <input type="date" name="start_date" {...attribs} />
                        </div>
                    </div>

                    <div className="grid-group">
                        <div className="input-group">
                            <label>Gender</label>
                            <Input
                                type="radio"
                                name="gender"
                                label="female"
                                {...attribs}
                            />

                            <Input
                                type="radio"
                                name="gender"
                                label="male"
                                {...attribs}
                            />

                        </div>
                        <div>
                        </div>
                    </div>

                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        label="Password"
                        {...attribs}
                    />

                    <div className="button">
                        <button className="submit-button" type="submit">Signup</button>
                    </div>

                </form>

            </Template>
        </div>
    )
}

export default EmployeeSignup
