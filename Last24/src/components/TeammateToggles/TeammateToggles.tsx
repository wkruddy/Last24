import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import TeamCheckbox from '../TeamCheckbox/TeamCheckbox';

const ListItemBox = styled.li`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    display: flex;
    // flex-grow: 1.5;
    text-align: left;
    line-height: 48px;
`;

const Checkboxes = styled.div`
    display: flex;
    flex-direction: row;
`;

interface ITeammateToggleProps {
    teammateName: string;
    updateTodayList: (name) => void;
    updateTimeOffList: (name) => void;
    updateLateList: (name) => void;
}

const StringMap = {
    Late: 'Late',
    PTO: 'PTO',
    Went: 'Went',
};

const TeammateToggle: React.FunctionComponent<ITeammateToggleProps> = ({
    teammateName,
    updateTodayList,
    updateTimeOffList,
    updateLateList,
}) => {
    const [wentDisabled, setWentDisabled] = useState(false);
    const [ptoDisabled, setPtoDisabled] = useState(false);
    const [lateDisabled, setLateDisabled] = useState(false);

    const toggleTodayCheckState = toggleOn => {
        setPtoDisabled(toggleOn);
        updateTodayList(teammateName);
    };

    const toggleTimeOffCheckState = toggleOn => {
        setWentDisabled(toggleOn);
        setLateDisabled(toggleOn);
        updateTimeOffList(teammateName);
    };

    const toggleLateCheckState = toggleOn => {
        setPtoDisabled(toggleOn);
        updateLateList(teammateName);
    };

    return (
        <ListItemBox key={teammateName}>
            <Name>
                <FormattedMessage id={teammateName} defaultMessage={teammateName} />
            </Name>
            <Checkboxes>
                <TeamCheckbox
                    headerText={StringMap.Went}
                    isDisabled={wentDisabled}
                    onCheckChange={toggleTodayCheckState}
                />
                <TeamCheckbox
                    headerText={StringMap.PTO}
                    isDisabled={ptoDisabled}
                    onCheckChange={toggleTimeOffCheckState}
                />
                <TeamCheckbox
                    headerText={StringMap.Late}
                    isDisabled={lateDisabled}
                    onCheckChange={toggleLateCheckState}
                />
            </Checkboxes>
        </ListItemBox>
    );
};

export default TeammateToggle;
