import { ADD_USER } from '../App.constants';

export const addUser = user => ({
    type: ADD_USER,
    payload: { user },
});

export default { addUser };
