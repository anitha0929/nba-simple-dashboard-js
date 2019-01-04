import axios from 'axios'
import {LEADERS_FETCH} from '.././constants'
import {STATS_BY_DIVISION_FETCH} from '.././constants'
import {ASSIST_LEADERS_FETCH} from '.././constants'

// Action creator to fetch and dispatch stats by division action
export const fetchStatsByDivision = (division) => async (dispatch) => {
    const response = await axios.get(`/team-standing-by-division?division=${division}`);
    //dispatches an action
    dispatch(
        {
            type: STATS_BY_DIVISION_FETCH,
            payload: {team_stats: response.data.team_stats, division: division}
        });
}

// Action creator to fetch and dispatch the leading point scorer action
export const fetchLeaders = () => async (dispatch) => {
    const response = await axios.get(`/get_leaders/`);
    //dispatches an action
    dispatch({type: LEADERS_FETCH, payload: response.data});
}

// Action creator to fetch and dispatch the assist leader action
export const fetchAssistLeaders = () => async (dispatch) => {
    const response = await axios.get(`/get_assist_leaders/`);
    //dispatches an action
    dispatch({type: ASSIST_LEADERS_FETCH, payload: response.data});
}

