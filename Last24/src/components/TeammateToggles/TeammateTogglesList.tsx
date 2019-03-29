import React from 'react';
import styled from 'styled-components';
import TeammateToggles from './TeammateToggles';
import { ITeammate } from './TeammateToggles.interfaces';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 0;
`;

interface IToggleListProps {
    teammates: ITeammate[];
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
    updateTodayList: () => void;
    updateTimeOffList: () => void;
    updateLateList: () => void;
}

const TeammateTogglesList: React.FunctionComponent<IToggleListProps> = ({
    teammates,
    updateTodayList,
    updateTimeOffList,
    updateLateList,
}) => {
    return (
        <List>
            {teammates &&
                teammates.map(({ name: teammateName }) => (
                    <TeammateToggles
                        teammateName={teammateName}
                        key={teammateName}
                        updateTodayList={updateTodayList}
                        updateTimeOffList={updateTimeOffList}
                        updateLateList={updateLateList}
                    />
                ))}
        </List>
    );
};

export default TeammateTogglesList;
