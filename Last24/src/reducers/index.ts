import { combineReducers } from 'redux';
import appReducers from '../routeComponents/App/reducers/App.reducers';
import continuumReducers from '../routeComponents/Continuum/reducers/Continuum.reducers';
import todayReducers from '../routeComponents/Today/reducers/Today.reducers';
import finalReducer from './finalReducer';

const baseReducers = combineReducers({
    app: appReducers,
    today: todayReducers,
    continuum: continuumReducers,
});

export default (state, action) => {
    const base = baseReducers(state, action);
    const final = finalReducer(base, action);
    return final;
};
