import React from 'react';
import OrderedTeamList from '../OrderedTeamList/OrderedTeamList';
import { ITeammate } from '../TeammateToggles/TeammateToggles.interfaces';

interface IListGroupProps {
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
}

const TeammateListGroup: React.FunctionComponent<IListGroupProps> = ({ todayList, timeOffList, lateList }) => (
    <>
        <OrderedTeamList classType="today" title="Today" list={todayList} />
        <OrderedTeamList classType="vacationer" title="Vacationers" list={timeOffList} />
        <OrderedTeamList classType="straggler" title="Stragglers" list={lateList} />
    </>
);

export default TeammateListGroup;
