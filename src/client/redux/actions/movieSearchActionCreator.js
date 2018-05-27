import { URLS, API_KEY, API_BASE_PATH, ACTIONS } from '../../constants';
import axios from 'axios';


function searchMovies({ searchQuery, language }) {
	let movieSearchUrl = `${API_BASE_PATH}${URLS.SEARCH_MOVIES_PATH}?api_key=${API_KEY}&with_original_language=${language}&query=${searchQuery}&sort_by=vote_average.desc`;
	return dispatch => {

		dispatch({
			type: ACTIONS.MOVIE_SEARCH_STARTED
		});

		axios.get(movieSearchUrl).then(response => {
			dispatch({
				type: ACTIONS.MOVIE_SEARCH_COMPLETED,
				payload: response.data
			});
		}).catch(err => {
			dispatch({
				type: ACTIONS.MOVIE_DETAILS_REQUEST_ERROR,
				payload: err
			});
		});
	};
}

export default searchMovies;