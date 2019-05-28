export const SET_HERO_DATA = 'SET_HERO_DATA';

const PUBLIC_KEY = '899feacccd4fb62ba89a58031cb247a0';
const HASH = '9c6abb7a8435576fb7ce3d23401cd558';

const PRIV_KEY = 'this-should-be-a-long-hash';

export const getHeros = limit => {
    const urlBase = 'http://gateway.marvel.com/v1/public/characters';
    const LIMIT = limit ? limit : 10;
    
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }&limit=${ LIMIT }`)
                .then(response => {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        return response.json();
                    }
                })
                .then(myJson => {
                    const { data } = myJson;
                    const { results } = data;
                    const heros = results.map(hero => ({
                        comics: hero.comics,
                        description: hero.description,
                        id: hero.id,
                        name: hero.name,
                        thumbnail: {
                            extension: hero.thumbnail.extension,
                            path: hero.thumbnail.path
                        }
                    }));
                    dispatch({ data: heros, type: SET_HERO_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
    
};

export const getComicInfo = comicId => {

    const urlBase = `http://gateway.marvel.com/v1/public/comics/${ comicId }`;
    
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }`)
                .then(response => response.json())
                .then(myJson => {
                    const { data } = myJson;
                    // const { results } = data;
                    console.log(data);
                    
                    // const heros = results.map(hero => ({
                    //     comics: hero.comics,
                    //     description: hero.description,
                    //     id: hero.id,
                    //     name: hero.name,
                    //     thumbnail: {
                    //         extension: hero.thumbnail.extension,
                    //         path: hero.thumbnail.path
                    //     }
                    // }));
                    // dispatch({ data: heros, type: SET_HERO_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
}
