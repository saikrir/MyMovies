import { API_BASE_PATH, ACTIONS, URLS, API_KEY } from '../../constants';
import axios from 'axios';

const loadMovieDetails = (movieId = 0) => {

	return dispatch => {
		dispatch({
			type: ACTIONS.MOVIE_DETAILS_REQUEST_STARTED,
			payload: movieId
		});

		const movieRequestUrl = `${API_BASE_PATH}${URLS.MOVIE_DETAILS}${movieId}?api_key=${API_KEY}`;
		const movieCreditsEndpt = URLS.MOVIE_CREDITS_PATH.replace('{movie_id}', movieId);

		axios.get(movieRequestUrl).then(res => {
			return res.data;
		}).then(movieData => {
			const movieCreditsUrl = `${API_BASE_PATH}${movieCreditsEndpt}?api_key=${API_KEY}`;
			axios.get(movieCreditsUrl).then(res => {
				let { data: { cast } } = res;
				let movieDtls = Object.assign({}, movieData);
				if (cast.length > 10) {
					cast = cast.slice(0, 10);
				}
				movieDtls.cast = cast;
				dispatch({
					type: ACTIONS.MOVIE_DETAILS_REQUEST_COMPLETED,
					payload: movieDtls
				});
			});
		}
		).catch(error => {
			dispatch({
				type: ACTIONS.MOVIE_DETAILS_REQUEST_ERROR,
				payload: error
			});
		});
	};
};

export default loadMovieDetails;