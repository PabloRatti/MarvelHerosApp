export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';
/**
 * Make API Call
 * For this example, I will be using the sample data in the json file
 * delay the retrieval [Sample reasons only]
 */
export function getData () {
    return dispatch => {

        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({ data: data, type: DATA_AVAILABLE });
        }, 2000);
 
    };
}
