import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Login = lazy(() => import('./view/login/Login'));

const Routes = () => (
    <Router>
        <Suspense fallback={<div>falback</div>}>
            <Switch>
                <Route path={"/login"} component={Login}/>
                <Route path={"/"} component={Login}/>
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;