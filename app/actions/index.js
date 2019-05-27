export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';
// import herosData from '../database/characters.json';
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

export function getHeros () {
    
    const PRIV_KEY = 'this-should-be-a-long-hash';

    const PUBLIC_KEY = '899feacccd4fb62ba89a58031cb247a0';

    const HASH = '9c6abb7a8435576fb7ce3d23401cd558';

    const urlBase = 'http://gateway.marvel.com/v1/public/characters';
    const limit = 10;

    return dispatch => {
        fetch(`${ urlBase }?apikey=899feacccd4fb62ba89a58031cb247a0&ts=1&hash=${ HASH }&limit=10`)
            .then(response => response.json())
            .then(promise => {
                const { data } = promise;
                const { results } = data;
                const heros = [];
                results.forEach(hero => {
                    heros.push(hero.name);
                });
                console.log(heros);
                dispatch({ data: heros, type: DATA_AVAILABLE });
            })
            .catch(err => {
                console.log(err);
            });
    };
}
