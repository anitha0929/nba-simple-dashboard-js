import {combineReducers} from 'redux';
import {LEADERS_FETCH} from '.././constants'
import {STATS_BY_DIVISION_FETCH} from '.././constants'
import {ASSIST_LEADERS_FETCH} from '.././constants'

const commonReducer = (state = '', action) => {
    switch (action.type) {
        case LEADERS_FETCH:
            return {
                leader: action.payload.leader,
                pct: action.payload.pct,
                leaders: JSON.parse(action.payload.leaders)
            };
        case STATS_BY_DIVISION_FETCH:
            return {[action.payload.division]: JSON.parse(action.payload.team_stats)};
        case ASSIST_LEADERS_FETCH:
            return {
                assist_leader: action.payload.leader,
                assist_pct: action.payload.pct,
                assist_leaders: JSON.parse(action.payload.leaders)
            };
        default:
            return state;
    }
}

export default combineReducers({
    api: commonReducer
});