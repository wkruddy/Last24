import { UPDATE_LATE_LIST, UPDATE_PTO_LIST, UPDATE_TODAY_LIST } from '../TeammateToggles.constants';

const INITIAL_STATE = {
    todayList: [],
    timeOffList: [],
    lateList: [],
};

interface IReduxAction {
    type: string;
    payload: any;
}

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const toggleReducers = (state = INITIAL_STATE, { type, payload }: IReduxAction) => {
    const actionsBlock = {
        [UPDATE_TODAY_LIST]: () => {
            const { name } = payload;
            const todayList = [...state.todayList].includes(name)
                ? state.todayList.filter(today => today !== name)
                : [...state.todayList, name];
            return { ...state, todayList };
        },
        [UPDATE_PTO_LIST]: () => {
            const { name } = payload;
            const timeOffList = [...state.timeOffList].includes(name)
                ? state.timeOffList.filter(today => today !== name)
                : [...state.timeOffList, name];
            return { ...state, timeOffList };
        },
        [UPDATE_LATE_LIST]: () => {
            const { name } = payload;
            const lateList = [...state.lateList].includes(name)
                ? state.lateList.filter(late => late !== name)
                : [...state.lateList, name];
            return { ...state, lateList };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default toggleReducers;
