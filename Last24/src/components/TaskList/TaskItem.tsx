import { TextField } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, PrimaryTheme } from '../../common/enums';
import { ITaskProps } from '../TaskList/TaskList.interfaces';

const TaskListItem = styled.li`
    display: flex;
    flex-direction: row;
`;

const TaskButtonBox = styled.div`
    display: flex;
`;

const RemoveTaskButton = styled.button`
    display: flex;
    padding: 3px;
    background-color: ${PrimaryTheme.SecondaryButton};
    font-size: 14px;
    border: none;
    cursor: pointer;
    outline: none;

    > svg:hover {
        color: ${Colors.Grey500};
    }
`;

const TaskItem: React.FunctionComponent<ITaskProps> = ({
    taskKey,
    isForToday,
    task: { name, taskId },
    handleRemoveItem,
    updateTasks,
}) => {
    const [taskName, setTaskName] = useState(name);

    const debouncedTextChange = debounce(textVal => {
        updateTasks(taskName, taskId, isForToday);
    }, 300);

    const onTextChange = e => {
        const textVal = e.target.value;
        setTaskName(textVal);
        debouncedTextChange(textVal);
    };

    const onRemove = e => handleRemoveItem(taskId, isForToday);

    return (
        <TaskListItem key={taskKey}>
            <TextField onChange={onTextChange} value={taskName} multiline={true} rows={2} rowsMax={4} />
            <TaskButtonBox>
                <RemoveTaskButton onClick={onRemove}>
                    <Cancel fontSize="inherit" />
                </RemoveTaskButton>
            </TaskButtonBox>
        </TaskListItem>
    );
};

TaskItem.defaultProps = {
    task: {
        name: '',
        taskId: 0,
    },
    taskKey: '',
    isForToday: false,
};

export default TaskItem;
