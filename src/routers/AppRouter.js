import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import AdminPage from '../components/AdminPage';
import AdminEdit from '../components/AdminEdit';
import AdminCreateNew from '../components/AdminCreateNew';
import NotFoundPage from '../components/NotFoundPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/login" exact={true} component={LoginPage}/>
                <Route path="/admin" exact={true} component={AdminPage}/>
                <Route path="/create" exact={true} component={AdminCreateNew}/>
                <Route path="/edit/:id" component={AdminEdit}/>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;