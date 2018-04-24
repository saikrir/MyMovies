import {ACTIONS, API_KEY, URLS} from '../../constants';
import axios from 'axios';



function loadPopularMovies() {
	return (dispatch) => {
		dispatch({	type: ACTIONS.POPULAR_MOVIES_REQUEST_STARTED});
		const popularMoviesUrl = `${URLS.POPULAR_MOVIES_URL}&api_key=${API_KEY}`;
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

export default loadPopularMovies;