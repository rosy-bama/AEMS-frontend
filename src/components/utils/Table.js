import React from 'react';
import Input from './Input';

// Data to pass to our List elements
const employeeData = [
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
    { firstname: 'John', lastname: 'Doe', role: 'developer', email: 'johndoe@gmail.com', contact: '687643456', department: 'engineeering', manager: 'Shana Eric', startdate: '09/01/2006', salary: 100000 },
];

// Create a SearchTableApp Component
class SearchTableApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    handleChange(event) {
        // Get event value
        let searchValue = event.target.value;

        // Set the state to trigger a re-rendering
        this.setState({ search: searchValue });
    }

    render() {
        // Filter the table data
        let employees = employeeData,
            searchString = this.state.search.trim().toLowerCase();

        if (searchString.length > 0) {
            // We are searching. Filter the results.
            employees = employees.filter((e) => e.firstname.toLowerCase().match(searchString));
        }
        // Set the `update` property of the `UserInput` element
        return (
            <div className='table-container'>
                <UserInput update={(e) => this.handleChange(e)} />
                <Table data={employees} />
            </div>
        );
    }
}

// UserInput component
class UserInput extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <Input type='text' placeholder='Search Employees...' onChange={(e) => this.props.update(e)} />
            </div>
        );
    }
}

// Simple TableRow component for showing a <tr>
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                {Object.values(this.props.data).map((data, i) => (
                    <td key={i}>{data}</td>
                ))}
            </tr>
        );
    }
}

class Table extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const keys = [];
        for (const [key] of Object.entries(employeeData[0])) {
            keys.push(key);
        }

        return (
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                            {Object.values(keys).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                        {this.props.data.map(function (d, i) {
                            return <TableRow key={'person-' + i} data={d} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchTableApp;
