import { createBrowserHistory } from 'history';

export const routePath = (path) => (path ? `/dashboard/${path}` : '/');

class Navigator {
    history = createBrowserHistory();

    push(path, state) {
        this.history.push(path, { ...state });
    }

    replace(path) {
        this.history.replace(path);
    }

    reload() {
        window.location.reload();
    }
}

const company = JSON.parse(window.localStorage.getItem('company'));

export const ROUTE_LINKS = {
    // DASHBOARD
    DASHBOARD: {
        HOME: routePath(`${company.company_name}`),
        EMPLOYEES: routePath(`${company.company_name}/employees`),
        POSITION: routePath(`${company.company_name}/position`),
        DEPARTMENTS: routePath(`${company.company_name}/departments`),
        PROJECTS: routePath(`${company.company_name}/projects`),
        TASKS: routePath(`${company.company_name}/tasks`),
        LEAVES: routePath(`${company.company_name}/leaves`),
        ASSISTANCE: routePath(`${company.company_name}/assistance`),
    },
};

export default new Navigator();
