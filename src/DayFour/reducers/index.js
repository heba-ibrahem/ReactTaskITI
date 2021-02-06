import {movies} from './movies'
import {oneMovie} from './oneMovie'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    moviesList:movies,
    movie: oneMovie
}) 

export default rootReducers;