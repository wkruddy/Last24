import { END_TIMER, START_TIMER } from '../TimerButtons.constants';

export const startTimer = dispatch => {
    const date = new Date();
    const startTime = date.toTimeString();

    return {
        type: START_TIMER,
        payload: { startTime },
    };
};

export const endTimer = dispatch => {
    const date = new Date();
    const endTime = date.toTimeString();

    return {
        type: END_TIMER,
        payload: { endTime },
    };
};
export default { startTimer, endTimer };
