import React from 'react';
import { render } from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import { Provider } from 'react-redux';
import { createReduxStore } from './common/methods';
import allReducers from './reducers/index';
import { addUser } from './routeComponents/App/actions/App.actions';
import App from './routeComponents/App/App';

addLocaleData(en);
addLocaleData(es);
addLocaleData(fr);

const INITIAL_STATE = {
    app: {
        user: {},
    },
    today: {},
    continuum: {},
    // analytics: {},
    // team: {},
    // settings: {},
};

const root = document.createElement('div');
root.setAttribute('style', 'display: flex;flex-direction: column;height: 100%;');
document.body.appendChild(root);

const store = createReduxStore(allReducers, INITIAL_STATE);
const authenticateUser = async () => ({ username: 'wkruddy', firstName: 'Kyle', lastName: 'Ruddy', userId: 0 });

const run = async () => {
    const user = await authenticateUser();
    store.dispatch(addUser(user));
    render(
        <Provider store={store}>
            <App user={user} />
        </Provider>,
        root
    );
};

run();
