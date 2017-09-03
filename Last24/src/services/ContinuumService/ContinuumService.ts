import { parameterizeEndpoint } from '../../common/methods';
import { IContinuumItem } from '../../routeComponents/Continuum/Continuum.interfaces';
import BaseService, { IServiceConfig } from '../BaseService/BaseService';

class ContinuumService extends BaseService {
    constructor(config?: IServiceConfig) {
        const configBlock = {
            ...config,
            url: '/user/:userId/continuum',
        };
        super(configBlock);
        this.setAuthenticationToken(config.token);
    }

    public sortDates(dates) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return dates.sort((aDate: any, bDate: any) => {
            const actualBDate: any = new Date(bDate);
            const actualADate: any = new Date(aDate);
            return actualBDate - actualADate;
        });
    }

    public tempRetrievalFromLocalStorage() {
        const dateKeys = Object.keys(localStorage);
        const sortedDates = this.sortDates(dateKeys);

        const memberMap = {
            'Kyle Ruddy': 0,
            'Seann Ives': 1,
            'Jon Greene': 2,
            'Haley Kotch': 3,
            'Richard Spring': 4,
            'Ben Huson': 5,
            'James Tran': 6,
            'Emma Findlay-Walters': 7,
        };
        const buildObj = name => ({
            name,
            id: memberMap[name],
        });
        const rawContinuum = sortedDates
            .filter(d => {
                const date = new Date(d);
                return date instanceof Date && !isNaN(date);
            })
            .map(date => {
                const history = JSON.parse(localStorage.getItem(date));
                history.lateList = history.lateList.map(buildObj);
                history.timeOffList = history.timeOffList.map(buildObj);
                history.todayList = history.todayList.map(buildObj);
                return { date, history };
            });

        return rawContinuum;
    }
    public async fetchContinuumData({ userId }): Promise<IContinuumItem[]> {
        const endpoint = parameterizeEndpoint('/all', { userId });
        // const continuumData = await this.get(endpoint);
        const continuumData = await this.tempRetrievalFromLocalStorage();
        return continuumData;
    }
}

export default ContinuumService;
