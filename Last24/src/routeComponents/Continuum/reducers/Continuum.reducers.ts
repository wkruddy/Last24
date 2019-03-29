import { SET_CONTINUUM } from '../Continuum.constants';

const INITIAL_STATE = {};

interface IReduxAction {
    type: string;
    payload: any;
}

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const continuumReducers = (state = INITIAL_STATE, { type, payload }: IReduxAction) => {
    const actionsBlock = {
        [SET_CONTINUUM]: () => {
            return { ...state, continuumData: payload.continuumData };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default continuumReducers;
