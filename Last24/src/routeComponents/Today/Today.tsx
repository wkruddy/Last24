import React, { FunctionComponent } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Colors, PrimaryTheme } from '../../common/enums';
import TaskListContainer from '../../components/TaskList/TaskListContainer';
import TeammateListGroup from '../../components/TeammateListGroup/TeammateListGroup';
import { ITeammate } from '../../components/TeammateToggles/TeammateToggles.interfaces';
import TeammateTogglesContainer from '../../components/TeammateToggles/TeammateTogglesContainer';
import TimerButtonsContainer from '../../components/TimerButtons/TimerButtonsContainer';
import { TodayStringMap } from './Today.constants';

const TodayContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1.5;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;

    h2,
    h3 {
        color: ${PrimaryTheme.PrimaryText};
        text-align: left;
        width: 50%;
    }
`;

const ListGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    border-bottom: 1px solid ${Colors.Grey300};
`;

const SaveButton = styled.button`
    border-radius: 15px;
    padding: 5px 10px;
    border: 0;
    outline: 0;
    background-color: ${PrimaryTheme.PrimaryButton}
    color: ${PrimaryTheme.PrimaryButtonText};
    cursor: pointer;
    width: 150px;
    margin: 15px auto;

    &:hover {
        background-color: ${PrimaryTheme.PrimaryButtonHover}
        color: $grey;
    }

    &:active {
        background-color: ${PrimaryTheme.PrimaryButtonActive}
    }
`;

interface ITodayProps {
    headerText: string;
    subheaderText: string;
    teammates: ITeammate[];
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
    date: string;
    persistDay: (e) => void;
}

const Today: FunctionComponent<ITodayProps> = props => {
    const { teammates, headerText, subheaderText, todayList, timeOffList, lateList, persistDay, date } = props;

    const onSaveClick = e => persistDay(e);

    return (
        <TodayContentBox>
            <Header>
                {headerText && <h2>{headerText}</h2>}
                {subheaderText && <h4>{subheaderText}</h4>}
                <FormattedDate value={date} />
            </Header>
            <TimerButtonsContainer />
            <ListGroupWrapper>
                <TeammateTogglesContainer teammates={teammates} />
                <TeammateListGroup todayList={todayList} timeOffList={timeOffList} lateList={lateList} />
                <TaskListContainer />
            </ListGroupWrapper>
            <SaveButton onClick={onSaveClick}>
                <FormattedMessage id={TodayStringMap.SaveToday} defaultMessage={TodayStringMap.SaveToday} />
            </SaveButton>
        </TodayContentBox>
    );
};

Today.defaultProps = {
    headerText: '',
    subheaderText: '',
    teammates: [],
    todayList: [],
    timeOffList: [],
    lateList: [],
};

export default Today;
