import { SET_CONTINUUM } from '../Continuum.constants';
import { IContinuumItem } from '../Continuum.interfaces';

export const setContinuum = (continuumData: IContinuumItem[]) => ({
    type: SET_CONTINUUM,
    payload: { continuumData },
});

export const fetchContinuum = (params, service) => async (dispatch, getState) => {
    const continuumData = await service.fetchContinuumData(params);
    dispatch(setContinuum(continuumData));
};

export default {
    fetchContinuum,
    setContinuum,
};
