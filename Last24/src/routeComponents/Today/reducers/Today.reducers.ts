import { combineReducers } from 'redux';
import taskListReducers from '../../../components/TaskList/reducers/TaskList.reducers';
import toggleReducers from '../../../components/TeammateToggles/reducers/TeammateToggles.reducers';
import timerReducers from '../../../components/TimerButtons/reducers/TimerButtons.reducers';

const todayReducers = combineReducers({
    timers: timerReducers,
    lists: toggleReducers,
    tasks: taskListReducers,
});

export default todayReducers;
