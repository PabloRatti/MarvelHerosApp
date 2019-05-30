import { SET_COMICS_DATA, SET_COMIC_DATA, SET_INITIAL_DATA, SET_RESULTS_DATA,SET_COMICSBYID_DATA } from '../actions/';
 
const dataState = {
    comicData: {},
    herosComicData: [],
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
    case SET_COMICS_DATA:
        state = Object.assign({}, state, {
            data: action.data,
            loading: false
        });
        return state;
    case SET_COMIC_DATA:
        state = Object.assign({}, state, {
            comicData: action.data,
            loading: false
        });
        return state;
        case SET_COMICSBYID_DATA:
            state = Object.assign({}, state, {
                herosComicByIdData: action.data,
                loading: false
            });
            return state;
    default:
        return state;
    }
};

export default DataReducer;