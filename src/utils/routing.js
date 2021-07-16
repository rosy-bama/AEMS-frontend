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

export const ROUTE_LINKS = {
    // DASHBOARD
    DASHBOARD: {
        HOME: routePath('company_name'),
        EMPLOYEES: routePath(`company_name/employees`),
        POSITION: routePath(`company_name/position`),
        DEPARTMENTS: routePath(`company_name/departments`),
        PROJECTS: routePath(`company_name/projects`),
        TASKS: routePath(`company_name/tasks`),
        LEAVES: routePath(`company_name/leaves`),
        ASSISTANCE: routePath(`company_name/assistance`),
    },
};

export default new Navigator();
