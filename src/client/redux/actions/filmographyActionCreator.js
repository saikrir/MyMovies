import { ACTIONS, API_BASE_PATH, URLS, API_KEY } from '../../constants';
import axios from 'axios';


function loadFilmograhy(personId) {
	return (dispatch)=> {
		const filmographyUrl  = `${API_BASE_PATH}${URLS.POPULAR_MOVIES_PATH}&api_key=${API_KEY}&with_people=${personId}`;
		makeFilmographyCall(filmographyUrl, dispatch);
	};
}


function makeFilmographyCall(url, dispatch) {
	dispatch({ type: ACTIONS.FILMOGRAPHY_REQUEST_STARTED });
	axios.get(url).then(response => {
		dispatch({
			type: ACTIONS.FILMOGRAPHY_REQUEST_COMPLETED,
			payload: response.data
		});
	}).catch(error => {
		dispatch({
			type: ACTIONS.FILMOGRAPHY_REQUEST_ERROR,
			payload: error
		});
	});
}

export default loadFilmograhy;