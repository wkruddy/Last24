type ITaskId = number | string;

export interface ITask {
    taskId: ITaskId;
    name: string;
}

export interface ITaskListContainerProps {
    todaysTasks: ITask[];
    yesterdaysTasks: ITask[];
    addItem: (task: ITask) => void;
    removeItem: (taskId: ITaskId) => void;
    updateTodaysTasks: (task: ITask) => void;
    updateYesterdaysTasks: (task: ITask) => void;
}

export interface ITaskListContainerState {
    wentDisabled: boolean;
    ptoDisabled: boolean;
    lateDisabled: boolean;
}

export interface ITaskListProps {
    label: string;
    isForToday: boolean;
    listKey: string;
    tasks: ITask[];
    updateTasks: (taskName: string, id: ITaskId, isForToday: boolean) => void;
    removeItem: (taskId: ITaskId, isForToday: boolean) => void;
    addItem: (isForToday: boolean) => void;
}

export interface ITaskProps {
    taskKey: string;
    isForToday: boolean;
    task: ITask;
    handleRemoveItem: (taskId: ITaskId, isForToday: boolean) => void;
    updateTasks: (taskName: string, id: ITaskId, isForToday: boolean) => void;
}
