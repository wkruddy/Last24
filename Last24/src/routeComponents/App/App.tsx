import React from 'react';
import { hot } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {} from 'styled-components/cssprop'; // Allows for usage of css prop throughout our app!!!
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import { RouteUrls } from './App.routes';
import AppRouter from './AppRouter';
const GlobalStyle = createGlobalStyle<{}>`
    body {
        ${''}
    }
`;

export const AppContext = React.createContext({
    user: { name: 'Kyle', userId: 0 },
    updateContext: (contextState, newState) => ({ ...contextState, ...newState }),
});

const App: React.FunctionComponent<{ user: any }> = props => {
    // const {
    //  user: { name, userId },
    // } = useContext(AppContext);

    const AppRouterRenderProp = ({ match }) => <AppRouter match={match} />;

    return (
        <IntlProvider locale="en">
            <BrowserRouter>
                <>
                    <GlobalStyle />
                    <PageHeader headerText={'Last24'} subheaderText={'Standup Straight'} />
                    <Switch>
                        <Route path={RouteUrls.App} render={AppRouterRenderProp} />
                    </Switch>
                    <PageFooter />
                </>
            </BrowserRouter>
        </IntlProvider>
    );
};
export default hot(module)(App);
