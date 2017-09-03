import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../components/TaskList/TaskList.interfaces';

const TaskList = styled.ul``;
const Task = styled.li``;

const TaskListReadonly: React.FunctionComponent<{ taskList: ITask[]; id: string }> = ({ taskList, id }) => {
    return <TaskList>{taskList && taskList.map(({ name }) => <Task key={`${name}-${id}`}>{name}</Task>)}</TaskList>;
};

export default TaskListReadonly;
