import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import TaskListReadonly from '../../components/TaskListReadonly/TaskListReadonly';
import TeammateListReadonly from '../../components/TeammateListReadonly/TeammateListReadonly';
import { IContinuumContentProps } from './Continuum.interfaces';

const Title = styled.div``;
const ContentWrapper = styled.div``;

const ContinuumContent: React.FunctionComponent<IContinuumContentProps> = ({
    title,
    titleId,
    taskList,
    teammateList,
}) => {
    return (
        <ContentWrapper>
            <Title>
                <FormattedMessage id={titleId} defaultMessage={`${title}:`} />
            </Title>
            {taskList && <TaskListReadonly taskList={taskList} id={titleId} />}
            {teammateList && <TeammateListReadonly teammateList={teammateList} id={titleId} />}}
        </ContentWrapper>
    );
};

export default ContinuumContent;
