import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContinuumRouter from '../Continuum/ContinuumRouter';
import TodayRouter from '../Today/TodayRouter';
import { RouteUrls } from './App.routes';

const AppRouter: React.FunctionComponent<{
    match: any;
}> = ({ match }) => {
    return (
        <Switch>
            <Route path={RouteUrls.Today} component={TodayRouter} />
            <Route path={RouteUrls.Continuum} component={ContinuumRouter} />
            <Redirect to={RouteUrls.Login} />;
        </Switch>
    );
};

export default AppRouter;
