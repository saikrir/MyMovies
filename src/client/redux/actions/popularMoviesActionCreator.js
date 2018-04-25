import {ACTIONS, API_KEY, URLS,API_BASE_PATH} from '../../constants';
import axios from 'axios';



function loadPopularMovies() {
	return (dispatch) => {
		dispatch({	type: ACTIONS.POPULAR_MOVIES_REQUEST_STARTED});
		const popularMoviesUrl = `${API_BASE_PATH}${URLS.POPULAR_MOVIES_URL}&api_key=${API_KEY}`;
		axios.get(popularMoviesUrl).then(response => {
			dispatch({
				type: ACTIONS.POPULAR_MOVIES_REQUEST_COMPLETED,
				payload: response.data
			});
		}).catch(error => {
			dispatch({
				type: ACTIONS.POPULAR_MOVIES_REQUEST_ERROR,
				payload: error
			});
		});
	};
}

function loadGenres() {
	return dispatch => {
		dispatch({
			type: ACTIONS.GENRES_REQUEST_STARTED
		});
		const genresURls = `${API_BASE_PATH}${URLS.MOVIE_GENRES}&api_key=${API_KEY}`;

		axios.get(genresURls).then(response => {
			dispatch({
				type: ACTIONS.GENRES_REQUEST_COMPLETED,
				payload: response.data
			});
		}).catch(error => {
			dispatch({
				type: ACTIONS.GENRES_REQUEST_ERROR,
				payload: error
			});
		});
	};
}


export {loadPopularMovies, loadGenres};