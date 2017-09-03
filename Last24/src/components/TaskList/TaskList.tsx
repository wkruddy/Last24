import { PlusOne } from '@material-ui/icons';
// import { debounce } from 'lodash';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { ITaskListProps } from './TaskList.interfaces';

const TaskItemList = styled.ul``;
const TaskItemListBox = styled.div``;
const Box = styled.div``;
const Label = styled.div``;
const AddItemButton = styled.button``;

const TaskList: React.FunctionComponent<ITaskListProps> = ({
    tasks,
    label,
    removeItem,
    addItem,
    updateTasks,
    isForToday,
}) => {
    // const [updatedTasks, setUpdatedTasks] = useState([]);

    // const debouncedUpdateTasks = debounce(updateTasks, 300);
    // this.debouncedUpdateYesterdaysTasks = debounce(this.props.taskListActions.updateYesterdaysTasks, 300);

    useEffect(() => {
        // const yesterdaysUpdated = this.props.yesterdaysTasks !== yesterdaysTasks;
        // const todaysUpdated = this.props.todaysTasks !== todaysTasks;
        // if (yesterdaysUpdated || todaysUpdated) {
        //     const tasks = this.getSpecificTasks(this.props.isForToday, todaysTasks, yesterdaysTasks);
        //     this.setState({ tasks });
        // }
    });

    const handleAddItem = e => addItem(isForToday);

    return (
        <Box>
            <Label>
                <FormattedMessage id={label} defaultMessage={label} />
            </Label>
            <TaskItemListBox>
                <TaskItemList>
                    {tasks &&
                        tasks.map(task => {
                            const { taskId } = task;
                            const taskKey = isForToday ? `todaysTasks-${taskId}` : `yesterdaysTasks-${taskId}`;
                            return (
                                <TaskItem
                                    key={taskKey}
                                    taskKey={taskKey}
                                    task={task}
                                    handleRemoveItem={removeItem}
                                    updateTasks={updateTasks}
                                    isForToday={isForToday}
                                />
                            );
                        })}
                </TaskItemList>
                <AddItemButton onClick={handleAddItem}>
                    <PlusOne />
                </AddItemButton>
            </TaskItemListBox>
        </Box>
    );
};

export default TaskList;
