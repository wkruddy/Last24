import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodayService from '../../services/TodayService/TodayService';
import { saveToday } from './actions/Today.actions';
import Today from './Today';
import { TodayStringMap } from './Today.constants';
import { ITodayContainerProps, ITodayContainerState } from './Today.interfaces';

class TodayContainer extends React.Component<ITodayContainerProps, ITodayContainerState> {
    public service: TodayService;
    public state = {
        teammates: [],
        todayList: [],
        timeOffList: [],
        lateList: [],
        todaysTasks: [],
        yesterdaysTasks: [],
        date: new Date().toLocaleDateString(),
    };
    constructor(props) {
        super(props);
        this.service = new TodayService({});
    }

    public async componentDidMount() {
        const teammates = await this.service.getTeammates({ userId: 0 });
        this.setState(() => ({ teammates }));
    }

    public persistDay = () => {
        const { startTime, endTime, yesterdaysTasks, todaysTasks, todayList, lateList, timeOffList } = this.props;
        const { date } = this.state;
        const todayData = { todayList, timeOffList, lateList, yesterdaysTasks, todaysTasks, startTime, endTime };
        this.props.saveToday({ date, todayData, userId: 0 }, this.service);
    };

    public render() {
        const { teammates, date } = this.state;

        return (
            <Today
                {...this.props}
                teammates={teammates}
                date={date}
                persistDay={this.persistDay}
                headerText={TodayStringMap.Today}
                subheaderText={TodayStringMap.SubheaderText}
            />
        );
    }
}

const mapStateToProps = ({ today }) => ({
    startTime: today.timers.startTime,
    endTime: today.timers.endTime,
    todayList: today.lists.todayList,
    timeOffList: today.lists.timeOffList,
    lateList: today.lists.lateList,
    todaysTasks: today.tasks.todaysTasks,
    yesterdaysTasks: today.tasks.yesterdaysTasks,
});

const mapDispatchToProps = dispatch => ({
    saveToday: bindActionCreators(saveToday, dispatch),
});

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(TodayContainer);
