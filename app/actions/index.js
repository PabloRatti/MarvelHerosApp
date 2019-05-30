export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';
export const SET_RESULTS_DATA = 'SET_RESULTS_DATA';

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
                    const { data: { results } } = myJson;
                    const heros = results.map(hero => ({
                        comics: hero.comics,
                        description: hero.description,
                        id: hero.id,
                        image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                        name: hero.name
                    }));
                    dispatch({ data: heros, type: SET_INITIAL_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
};

export const getSearchBarHeros = nameStartsWith => {
    const urlBase = 'http://gateway.marvel.com/v1/public/characters';
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }&limit=5&nameStartsWith=${ nameStartsWith }`)
                .then(response => {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        return response.json();
                    }
                })
                .then(myJson => {
                    const { data: { results } } = myJson;
                    const heros = results.map(hero => ({
                        comics: hero.comics,
                        id: hero.id,
                        image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                        name: hero.name
                    }));
                    dispatch({ data: heros, type: SET_RESULTS_DATA });
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
                    const { data: { results: [results] } } = myJson;
                    const comicInfo = {
                        description: results.description,
                        image: results.thumbnail.path + '.' + results.thumbnail.extension,
                        title: results.title
                    };
                    dispatch({ data: comicInfo, type: SET_COMIC_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
};


export const getComicsByHeroId = heroId => {
    const urlBase = `http://gateway.marvel.com/v1/public/characters/${ heroId }/comics`;
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }`)
                .then(response => response.json())
                .then(myJson => {
                    const { data } = myJson;
                    const { results } = data;
                    const comicsByHero = results.map(comic => ({
                        image: comic.thumbnail.path + '.' + comic.thumbnail.extension,
                        title: comic.title
                    }));
                    console.log(comicsByHero);
                    dispatch({ data: data, type: SET_COMIC_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
};