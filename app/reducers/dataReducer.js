//Import the actions types constant we defined in our actions
import { SET_HERO_DATA } from '../actions/';
 
const dataState = { data: [], loading: true };
 
const DataReducer = (state = dataState, action) => {
    switch (action.type) {
    case SET_HERO_DATA:
        state = Object.assign({}, state, { data: action.data, loading: false });
        return state;
    default:
        return state;
    }
};

export default DataReducer;
