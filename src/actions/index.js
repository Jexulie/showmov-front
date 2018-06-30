import axios from 'axios';
import keys from '../data/keys';

const fetchMovies = movies => ({
    type: 'FETCH_MOVIES',
    movies
});

const fetchComingsoons = comingsoons => ({
    type: 'FETCH_COMINGSOONS',
    comingsoons
});

const createError = error => ({
    type: 'CREATE_ERROR',
    error
});
// TODO: FIX PROD URL
export const callMovies = () => {
    return function(dispatch){
        return axios.get(`http://showmov-api.herokuapp.com/api/v1/movies/get?apikey=${keys}`)
            .then(movies => {
                dispatch(fetchMovies(movies.data.movies))
            })
            .catch(error => dispatch(createError(error)))
    }   
}

export const callComingsoons = () => {
    return function(dispatch){
        return axios.get(`http://showmov-api.herokuapp.com/api/v1/comingsoons/get?apikey=${keys}`)
            .then(comingsoons => {
                dispatch(fetchComingsoons(comingsoons.data.comingsoons))
            })
            .catch(error => dispatch(createError(error)))
    } 
}


