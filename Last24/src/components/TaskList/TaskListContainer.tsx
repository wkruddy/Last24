import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem, updateTodaysTasks, updateYesterdaysTasks } from './actions/TaskList.actions';
import TaskList from './TaskList';
import { TasksStringMap } from './TaskList.constants';
import { ITaskListContainerProps, ITaskListContainerState } from './TaskList.interfaces';

class TaskListContainer extends Component<ITaskListContainerProps, ITaskListContainerState> {
    public state = {
        wentDisabled: false,
        ptoDisabled: false,
        lateDisabled: false,
    };

    constructor(props) {
        super(props);
    }

    public taskUpdate = (name, taskId, isForToday) => {
        const updateFn = isForToday ? this.props.updateTodaysTasks : this.props.updateYesterdaysTasks;
        updateFn({ name, taskId });
    };

    public addNewTask = isForToday => {
        this.props.addItem(isForToday);
    };

    public render() {
        const { removeItem: removeAction, todaysTasks: todayTaskList, yesterdaysTasks: yesterdayTaskList } = this.props;

        return (
            <>
                <TaskList
                    key="last24"
                    listKey="last24"
                    label={TasksStringMap.Last24Text}
                    tasks={yesterdayTaskList}
                    addItem={this.addNewTask}
                    removeItem={removeAction}
                    updateTasks={this.taskUpdate}
                    isForToday={false}
                />
                <TaskList
                    key="this24"
                    listKey="this24"
                    label={TasksStringMap.This24Text}
                    tasks={todayTaskList}
                    addItem={this.addNewTask}
                    removeItem={removeAction}
                    updateTasks={this.taskUpdate}
                    isForToday={true}
                />
            </>
        );
    }
}

const mapStateToProps = ({ today }) => ({
    todaysTasks: today.tasks.todaysTasks,
    yesterdaysTasks: today.tasks.yesterdaysTasks,
});

const mapDispatchToProps = dispatch => ({
    updateTodaysTasks: bindActionCreators(updateTodaysTasks, dispatch),
    updateYesterdaysTasks: bindActionCreators(updateYesterdaysTasks, dispatch),
    addItem: bindActionCreators(addItem, dispatch),
    removeItem: bindActionCreators(removeItem, dispatch),
});

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(TaskListContainer);
