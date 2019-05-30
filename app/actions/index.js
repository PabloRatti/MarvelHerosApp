export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';
export const SET_RESULTS_DATA = 'SET_RESULTS_DATA';
export const SET_COMICS_DATA = 'SET_COMICS_DATA';
export const SET_COMIC_DATA = 'SET_COMIC_DATA';
export const SET_COMICSBYID_DATA = 'SET_COMICSBYID_DATA';

const PUBLIC_KEY = '899feacccd4fb62ba89a58031cb247a0';
const HASH = '9c6abb7a8435576fb7ce3d23401cd558';

const herosBaseUrl = 'http://gateway.marvel.com/v1/public/characters';

export const getHeros = (limit = 10) => (dispatch => {
    try {
        fetch(`${ herosBaseUrl }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }&limit=${ limit }`)
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
});

export const getSearchBarHeros = nameStartsWith => (dispatch => {
    try {
        fetch(`${ herosBaseUrl }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }&limit=5&nameStartsWith=${ nameStartsWith }`)
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
});

export const getComicInfo = comicId => {
    const urlBase = `http://gateway.marvel.com/v1/public/comics/${ comicId }`;
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }`)
                .then(response => response.json())
                .then(myJson => {
                    const { data: { results: [results] } } = myJson;

                    const artists = [];
                    const artistAux = [];
                    const writerAux = [];
                    const writers = results.creators.items.filter(item => {
                        if (item.role === 'writer') {
                            writerAux.push(item.name);
                            return item;
                        } else {
                            artistAux.push(item.name);
                            artists.push(item);
                        }
                    });
                    const comicInfo = {
                        artistString: artistAux.toString(),
                        artists,
                        characters: results.characters.items,
                        description: results.description,
                        onSaleData: results.dates[0].date,
                        title: results.title,
                        writerString: writerAux.toString(),
                        writers
                    };
                    dispatch({ data: comicInfo, type: SET_COMIC_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
};

export const getHerosByComicId = comicId => (dispatch => {
    try {
        fetch(`${ herosBaseUrl }?comics=${ comicId }&apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }`)
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json();
                }
            })
            .then(myJson => {
                const { data: { results } } = myJson;
                const heros = results.map(hero => ({
                    description: hero.description,
                    id: hero.id,
                    image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                    name: hero.name
                }));
                dispatch({ data: heros, type: SET_COMICSBYID_DATA });
            });
    } catch (err) {
        console.log(err);
    }
});

export const getComicsByHeroId = heroId => {
    const urlBase = `${ herosBaseUrl }/${ heroId }/comics`;
    return dispatch => {
        try {
            fetch(`${ urlBase }?apikey=${ PUBLIC_KEY }&ts=1&hash=${ HASH }`)
                .then(response => response.json())
                .then(myJson => {
                    const { data } = myJson;
                    const { results } = data;
                    const comicsByHero = results.map(comic => ({
                        id: comic.id,
                        image: comic.thumbnail.path + '.' + comic.thumbnail.extension,
                        title: comic.title
                    }));
                    dispatch({ data: comicsByHero, type: SET_COMICS_DATA });
                });
        } catch (err) {
            console.log(err);
        }
    };
};
