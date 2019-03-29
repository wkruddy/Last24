import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { endTimer, startTimer } from './actions/TimerButtons.actions';
import TimerButton from './TimerButton';

interface ITimerButtonContainerProps {
    startTimer: any;
    endTimer: any;
    startTime: string;
    endTime: string;
}

const Wrapper = styled.div``;

class TimerButtonsContainer extends Component<ITimerButtonContainerProps> {
    constructor(props) {
        super(props);
    }

    public handleStartClick = () => {
        this.props.startTimer();
    };

    public handleEndClick = () => {
        this.props.endTimer();
    };

    public render() {
        const { startTime, endTime } = this.props;
        return (
            <Wrapper>
                <TimerButton
                    className="start"
                    type="start"
                    timeDisplay={startTime}
                    buttonText="Start Standup"
                    handleTimerClick={this.handleStartClick}
                />
                <TimerButton
                    className="end"
                    type="end"
                    timeDisplay={endTime}
                    buttonText="End Standup"
                    handleTimerClick={this.handleEndClick}
                />
            </Wrapper>
        );
    }
}

const mapStateToProps = ({
    today: {
        timers: { startTime, endTime },
    },
}) => ({
    startTime,
    endTime,
});

const mapDispatchToProps = dispatch => ({
    startTimer: bindActionCreators(startTimer, dispatch),
    endTimer: bindActionCreators(endTimer, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerButtonsContainer);
