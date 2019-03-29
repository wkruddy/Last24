import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateLateList, updateTimeOffList, updateTodayList } from './actions/TeammateToggles.actions';
import { ITeammate } from './TeammateToggles.interfaces';
import TeammateTogglesList from './TeammateTogglesList';

const TeammateToggleBox = styled.div``;

interface IToggleListProps {
    teammates: ITeammate[];
    todayList: ITeammate[];
    timeOffList: ITeammate[];
    lateList: ITeammate[];
    updateTodayList: () => void;
    updateTimeOffList: () => void;
    updateLateList: () => void;
}

interface IToggleListState {
    wentDisabled: boolean;
    ptoDisabled: boolean;
    lateDisabled: boolean;
}

class TeammateTogglesContainer extends Component<IToggleListProps, IToggleListState> {
    public state = {
        wentDisabled: false,
        ptoDisabled: false,
        lateDisabled: false,
    };

    constructor(props) {
        super(props);
    }

    public render() {
        const {
            teammates,
            todayList,
            timeOffList,
            lateList,
            updateTodayList: updateTodayListActiom,
            updateTimeOffList: updateTimeOffListAction,
            updateLateList: updateLateListAction,
        } = this.props;

        return (
            <TeammateToggleBox>
                <TeammateTogglesList
                    teammates={teammates}
                    todayList={todayList}
                    timeOffList={timeOffList}
                    lateList={lateList}
                    updateTodayList={updateTodayListActiom}
                    updateTimeOffList={updateTimeOffListAction}
                    updateLateList={updateLateListAction}
                />
            </TeammateToggleBox>
        );
    }
}

const mapStateToProps = state => ({
    todayList: state.today.lists.todayList,
    timeOffList: state.today.lists.timeOffList,
    lateList: state.today.lists.lateList,
});

const mapDispatchToProps = dispatch => ({
    updateTodayList: bindActionCreators(updateTodayList, dispatch),
    updateTimeOffList: bindActionCreators(updateTimeOffList, dispatch),
    updateLateList: bindActionCreators(updateLateList, dispatch),
});

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(TeammateTogglesContainer);
