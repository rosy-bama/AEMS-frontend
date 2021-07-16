import Login from './components/session/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CompanySignup from './components/session/CompanySignup';
import EmailVerification from './components/session/EmailVerification';
import Company from './components/dashboard/Company';
import EmployeeSignup from './components/session/EmployeeSignUp';
import Employee from './components/dashboard/Employee';
import Roles from './components/dashboard/Roles';
import Department from './components/dashboard/Department';
import Project from './components/dashboard/Project';
import Task from './components/dashboard/Task';
import Leave from './components/dashboard/Leave';
import Assistance from './components/dashboard/Assistance';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/signup' exact component={CompanySignup} />
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/email-verification' exact component={EmailVerification} />
                    <Route path='/signup/employee' exact component={EmployeeSignup} />
                    <Route path='/dashboard/:companyname' exact component={Company} />
                    <Route path='/dashboard/:companyname/employees' exact component={Employee} />
                    <Route path='/dashboard/:companyname/roles' exact component={Roles} />
                    <Route path='/dashboard/:companyname/departments' exact component={Department} />
                    <Route path='/dashboard/:companyname/projects' exact component={Project} />
                    <Route path='/dashboard/:companyname/tasks' exact component={Task} />
                    <Route path='/dashboard/:companyname/leaves' exact component={Leave} />
                    <Route path='/dashboard/:companyname/assistance' exact component={Assistance} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
