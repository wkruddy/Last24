import { END_TIMER, START_TIMER } from '../TimerButtons.constants';

const INITIAL_STATE = {
    startTime: '',
    endTime: '',
};

const DEFAULT_ACTION = { type: '', payload: {} };

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const timerReducers = (state = INITIAL_STATE, { type, payload } = DEFAULT_ACTION) => {
    const actionsBlock = {
        [START_TIMER]: () => {
            const date = new Date();
            const startTime = date.toTimeString();
            return { ...state, startTime };
        },
        [END_TIMER]: () => {
            const date = new Date();
            const endTime = date.toTimeString();
            return { ...state, endTime };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default timerReducers;
