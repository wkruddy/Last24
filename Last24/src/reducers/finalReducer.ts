import { SAVE_DAY_DATA } from '../routeComponents/Today/Today.constants';

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const finalReducer = (state = { app: {}, today: {}, continuum: {} }, { type, payload }) => {
    const actionsBlock = {
        [SAVE_DAY_DATA]: () => {
            return {
                ...state,
                today: {
                    lists: {
                        lateList: [],
                        timeOffList: [],
                        todayList: [],
                    },
                    tasks: {
                        todaysTasks: [],
                        yesterdaysTasks: [],
                    },
                    timers: {
                        endTime: '',
                        startTime: '',
                    },
                },
            };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default finalReducer;
