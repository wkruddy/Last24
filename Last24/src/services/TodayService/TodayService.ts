import BaseService, { IServiceConfig } from '../BaseService/BaseService';

class TodayService extends BaseService {
    constructor(config?: IServiceConfig) {
        const configBlock = {
            ...config,
            url: '/user/:userId/today',
        };
        super(configBlock);
        // this.setAuthenticationToken(config.token);
    }

    public tempPersistToLocalStorage(date, todayData) {
        // Trigger an action that will make an HTTP request for persisting this.state.todayList
        const existingData = localStorage.getItem(date);
        if (existingData) {
            // Pop real confirmation dialog later
            confirm('You already have data saved for this date. Continue?');
        } else {
            localStorage.setItem(date, JSON.stringify(todayData));
        }
        return localStorage.getItem(date);
        // this.storeToJSON(date, todayData)
    }

    // storeToJSON (formattedDate, dayData) {
    //     let jsonData = {};
    //     fs.readFile('../../../../server/localHistory.json', 'utf-8', (err, data) => {
    //     	if (err) throw err
    //     	jsonData = JSON.parse(data)
    //         jsonData[formattedDate] = dayData
    //     })
    //
    //     fs.writeFile('../../../../server/localHistory.json', JSON.stringify(jsonData), 'utf-8', err => {
    //     	if (err) throw err
    //     	console.log('Done persisting!')
    //     })
    // }

    public async saveToday({ userId, todayData, date }): Promise<any> {
        // const endpoint = parameterizeEndpoint('/', { userId });
        // const todayData = await this.post(endpoint);
        const resolvedData = await this.tempPersistToLocalStorage(date, todayData);
        return resolvedData;
    }

    public getTempTeammateList() {
        return [
            { name: 'Tobias Funke', id: 0 },
            { name: 'Bob Loblaw', id: 3 },
            { name: 'Gob Bluth', id: 4 },
            { name: 'Goerge Michael Bluth', id: 5 },
            { name: 'Michael Bluth', id: 6 },
            { name: 'Buster Bluth', id: 7 },
        ];
    }

    public async getTeammates({ userId }): Promise<any> {
        // const endpoint = parameterizeEndpoint('/teammates', { userId });
        // const teammateData = await this.get(endpoint, { userId });
        const teammateData = await this.getTempTeammateList();
        return teammateData;
    }
}

export default TodayService;
