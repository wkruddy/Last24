import { ITask } from '../../components/TaskList/TaskList.interfaces';
import { ITeammate } from '../../components/TeammateToggles/TeammateToggles.interfaces';
import ContinuumService from '../../services/ContinuumService/ContinuumService';

export interface IContinuumItem {
    date: string;
    history: {
        todayList: ITeammate[];
        currentList: ITeammate[];
        lateList: ITeammate[];
        timeOffList: [];
        todaysTasks: ITask[];
        endTime: string;
        startTime: string;
    };
}

export interface IContinuumContainerProps {
    continuumData: IContinuumItem[];
    fetchContinuum: (params, service: ContinuumService) => void;
}

export interface IContinuumContainerState {
    headerText: string;
    subheaderText: string;
}

export interface IContinuumProps {
    continuumData: IContinuumItem[];
    headerText: string;
    subheaderText: string;
}

export interface IContinuumContentProps {
    title: string;
    titleId: string;
    taskList?: ITask[];
    teammateList?: ITeammate[];
}
