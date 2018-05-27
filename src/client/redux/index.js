import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popularMovieReducer from './reducers/popularMoviesReducer';
import genresReducer from './reducers/genresReducer';
import movieDetailReducer from './reducers/movieDetailReducer';
import movieSearchReducer from './reducers/movieSearchReducer';


let rootReducer = combineReducers({
	form: formReducer,
	popularMovies: popularMovieReducer,
	genres: genresReducer,
	movieDetails: movieDetailReducer,
	movieSearchResults: movieSearchReducer
});

export default rootReducer;