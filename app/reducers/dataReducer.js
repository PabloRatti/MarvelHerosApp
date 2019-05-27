//Import the actions types constant we defined in our actions
import { DATA_AVAILABLE } from '../actions/';
 
const dataState = { data: [], loading: true };
 
const DataReducer = (state = dataState, action) => {
    switch (action.type) {
    case DATA_AVAILABLE:
        state = Object.assign({}, state, { data: action.data, loading: false });
        return state;
    default:
        return state;
    }
};

export default DataReducer;
