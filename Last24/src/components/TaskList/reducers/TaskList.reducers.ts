import { UPDATE_TODAYS_TASKS, UPDATE_YESTERDAYS_TASKS } from '../TaskList.constants';

const INITIAL_STATE = {
    yesterdaysTasks: [],
    todaysTasks: [],
};

interface IReduxAction {
    type: string;
    payload: any;
}

const getResult = (actionsBlock, type, state) => (actionsBlock[type] ? actionsBlock[type]() : state);

const taskListReducers = (state = INITIAL_STATE, { type, payload }: IReduxAction) => {
    const actionsBlock = {
        [UPDATE_TODAYS_TASKS]: () => {
            const currentTasks = [...state.todaysTasks];
            const { task } = payload;
            let todaysTasks = currentTasks;
            const matchingTask = currentTasks.find(({ taskId }) => task.taskId === taskId) || {};

            const shouldRemoveTask = task.name === null;
            const shouldUpdateTask = task.taskId === matchingTask.taskId;
            const creatingNewTask = task.name === '' && !shouldUpdateTask && !shouldRemoveTask;

            if (shouldRemoveTask) todaysTasks = currentTasks.filter(({ taskId }) => task.taskId !== taskId);
            if (creatingNewTask) todaysTasks = [...currentTasks, task];
            if (shouldUpdateTask) currentTasks.find(({ taskId }) => task.taskId === taskId).name = task.name;
            return { ...state, todaysTasks };
        },
        [UPDATE_YESTERDAYS_TASKS]: () => {
            const currentTasks = [...state.yesterdaysTasks];
            const { task } = payload;
            let yesterdaysTasks = currentTasks;
            const matchingTask = currentTasks.find(({ taskId }) => task.taskId === taskId) || {};

            const shouldRemoveTask = task.name === null;
            const shouldUpdateTask = task.taskId === matchingTask.taskId;
            const creatingNewTask = task.name === '' && !shouldUpdateTask && !shouldRemoveTask;

            if (shouldRemoveTask) yesterdaysTasks = currentTasks.filter(({ taskId }) => task.taskId !== taskId);
            if (creatingNewTask) yesterdaysTasks = [...currentTasks, task];
            if (shouldUpdateTask) currentTasks.find(({ taskId }) => task.taskId === taskId).name = task.name;
            return { ...state, yesterdaysTasks };
        },
    };

    return getResult(actionsBlock, type, state);
};

export default taskListReducers;
