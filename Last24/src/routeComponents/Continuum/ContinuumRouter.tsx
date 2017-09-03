import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteUrls } from '../App/App.routes';
import ContinuumContainer from './ContinuumContainer';

const ContinuumRouter: React.FunctionComponent<{
    match: any;
}> = ({ match }) => {
    const ContinuumComponentRenderProp = props => <ContinuumContainer {...props} />;
    return (
        <Switch>
            <Route path={RouteUrls.Continuum} render={ContinuumComponentRenderProp} />
        </Switch>
    );
};

export default ContinuumRouter;
