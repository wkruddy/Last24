import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteUrls } from '../App/App.routes';
import TodayContainer from './TodayContainer';

const TodayRouter: React.FunctionComponent<{
    match: any;
}> = ({ match }) => {
    const TodayComponentRenderProp = props => <TodayContainer {...props} />;
    return (
        <Switch>
            <Route path={RouteUrls.Today} render={TodayComponentRenderProp} />
        </Switch>
    );
};

export default TodayRouter;
