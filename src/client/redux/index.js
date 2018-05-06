import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popularMovieReducer from './reducers/popularMoviesReducer';
import genresReducer from './reducers/genresReducer';
import movieDetailReducer from './reducers/movieDetailReducer';


let rootReducer = combineReducers({
	form: formReducer,
	popularMovies: popularMovieReducer,
	genres: genresReducer,
	movieDetails: movieDetailReducer
});

export default rootReducer;

