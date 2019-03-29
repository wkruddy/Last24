import { ITask } from '../../components/TaskList/TaskList.interfaces';
import { ITeammate } from '../../components/TeammateToggles/TeammateToggles.interfaces';

export interface ITodayContainerProps {
    startTime: string;
    endTime: string;
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
    todaysTasks: ITask[];
    yesterdaysTasks: ITask[];
    saveToday: (todayData, service) => void;
}

export interface ITodayContainerState {
    teammates: ITeammate[];
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
    todaysTasks: ITask[];
    yesterdaysTasks: ITask[];
    date: string;
}
