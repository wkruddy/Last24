import { SAVE_DAY_DATA } from '../Today.constants';

export const saveToday = (data, service) => async dispatch => {
    const todayData = await service.saveToday(data);
    dispatch({
        type: SAVE_DAY_DATA,
        payload: { todayData },
    });
};

export default { saveToday };
