import { UPDATE_LATE_LIST, UPDATE_PTO_LIST, UPDATE_TODAY_LIST } from '../TeammateToggles.constants';

export const updateTodayList = name => ({
    type: UPDATE_TODAY_LIST,
    payload: { name },
});

export const updateTimeOffList = name => ({
    type: UPDATE_PTO_LIST,
    payload: { name },
});

export const updateLateList = name => ({
    type: UPDATE_LATE_LIST,
    payload: { name },
});

export default { updateTodayList, updateTimeOffList, updateLateList };
