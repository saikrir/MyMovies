import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popularMovieReducer from './reducers/popularMoviesReducer';


let rootReducer = combineReducers({
	form: formReducer,
	popularMovies: popularMovieReducer
});

export default rootReducer;

