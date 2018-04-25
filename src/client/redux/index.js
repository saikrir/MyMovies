import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popularMovieReducer from './reducers/popularMoviesReducer';
import genresReducer from './reducers/genresReducer';


let rootReducer = combineReducers({
	form: formReducer,
	popularMovies: popularMovieReducer,
	genres: genresReducer
});

export default rootReducer;

