import React from 'react';
import styled from 'styled-components';
import { ITeammate } from '../../components/TeammateToggles/TeammateToggles.interfaces';

const TeammateList = styled.ul``;
const Teammate = styled.li``;

const TeammateListReadonly: React.FunctionComponent<{ teammateList: ITeammate[]; id: string }> = ({
    teammateList,
    id,
}) => {
    return (
        <TeammateList>
            {teammateList && teammateList.map(({ name }) => <Teammate key={`${name}-${id}`}>{name}</Teammate>)}
        </TeammateList>
    );
};

export default TeammateListReadonly;
