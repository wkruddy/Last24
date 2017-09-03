import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

export const regurgitateCookie = (cookie: string, key: string) => {
    return cookie
        .split(';')
        .map(kv => kv.split('='))
        .map(pair => (pair[0].trim() === key ? pair[1].trim() : ''))
        .join('');
};

export const consumeCookie = (token: string) => {
    document.cookie = `token=${token}; path=/; expires=999999999;`;
};

export const parameterizeString = (str: string, params): string =>
    str.replace(RegExp(Object.keys(params).join('|'), 'gi'), matched => {
        return params[matched] || matched;
    });

export const parameterizeEndpoint = (str, params) => {
    const parameterizedKeys = Object.keys(params).map(key => ({
        [`:${key}`]: params[key],
    }));
    const replace = parameterizedKeys.reduce((a, b) => Object.assign({}, a, b));
    return parameterizeString(str, replace);
};

export const capitalizeFirstLetter = (word = '') => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const lowerCaseFirstLetter = (word = '') => `${word.charAt(0).toLowerCase()}${word.slice(1)}`;

export const createReduxStore = (reducers, initialState = {}) => {
    const middleware = [thunk];

    // Apply logic for the Redux DevTools
    const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducers);
        });
    }

    return store;
};
