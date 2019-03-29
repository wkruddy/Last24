import { ADD_USER } from '../App.constants';

const INITIAL_STATE = {
    user: '',
};

interface IReduxAction {
    type: string;
    payload: any;
}

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const appReducers = (state = INITIAL_STATE, { type, payload }: IReduxAction) => {
    const actionsBlock = {
        [ADD_USER]: () => {
            return { ...state, user: payload.user };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default appReducers;
