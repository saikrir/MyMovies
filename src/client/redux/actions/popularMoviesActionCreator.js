import { ACTIONS, API_KEY, URLS, API_BASE_PATH } from '../../constants';
import axios from 'axios';



function loadPopularMovies(genreId) {
	return (dispatch) => {
		dispatch({ type: ACTIONS.POPULAR_MOVIES_REQUEST_STARTED });
		const popularMoviesUrl = `${API_BASE_PATH}${URLS.POPULAR_MOVIES_URL}&api_key=${API_KEY}&with_genres=${genreId}`;
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

function loadFavoriteMovies() {
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
			return response;
		}).then((response) => {
			let firstGenre = response.data.genres[0];
			const popularMoviesUrl = `${API_BASE_PATH}${URLS.POPULAR_MOVIES_URL}&api_key=${API_KEY}&with_genres=${firstGenre.id}`;
			axios.get(popularMoviesUrl).then(moviesResponse => {
				dispatch({
					type: ACTIONS.POPULAR_MOVIES_REQUEST_COMPLETED,
					payload: moviesResponse.data
				});
			}).catch(error => {
				dispatch({
					type: ACTIONS.POPULAR_MOVIES_REQUEST_ERROR,
					payload: error
				});
			});

		}).catch(error => {
			dispatch({
				type: ACTIONS.POPULAR_MOVIES_REQUEST_ERROR,
				payload: error
			});
		});
	};
}


export { loadPopularMovies, loadGenres, loadFavoriteMovies };