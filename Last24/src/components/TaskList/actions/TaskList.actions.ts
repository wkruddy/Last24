import { UPDATE_TODAYS_TASKS, UPDATE_YESTERDAYS_TASKS } from '../TaskList.constants';

export const updateTodaysTasks = task => ({
    type: UPDATE_TODAYS_TASKS,
    payload: { task },
});

export const updateYesterdaysTasks = task => ({
    type: UPDATE_YESTERDAYS_TASKS,
    payload: { task },
});

const getTaskUpdatingFn = isForToday => (isForToday ? updateTodaysTasks : updateYesterdaysTasks);

export const addItem = isForToday => dispatch => {
    const id = Math.random() * 10000;
    const taskId = `task-${id.toFixed(0)}`;
    const task = { taskId, name: '' };
    const taskAction = getTaskUpdatingFn(isForToday);
    dispatch(taskAction(task));
};

export const removeItem = (taskId, isForToday) => dispatch => {
    const taskAction = getTaskUpdatingFn(isForToday);
    dispatch(taskAction({ taskId, name: null }));
};

export default {
    updateTodaysTasks,
    updateYesterdaysTasks,
    addItem,
    removeItem,
};
