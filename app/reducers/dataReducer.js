//Import the actions types constant we defined in our actions
import { SET_INITIAL_DATA, SET_RESULTS_DATA } from '../actions/';
 
const dataState = {
    initialHerosData: [],
    loading: true,
    searchResultsHerosData: []
};

const DataReducer = (state = dataState, action) => {
    switch (action.type) {
    case SET_INITIAL_DATA:
        state = Object.assign({}, state, {
            initialHerosData: action.data,
            loading: false
        });
        return state;
    case SET_RESULTS_DATA:
        state = Object.assign({}, state, {
            loading: false,
            searchResultsHerosData: action.data
        });
        return state;
    default:
        return state;
    }
};

export default DataReducer;
