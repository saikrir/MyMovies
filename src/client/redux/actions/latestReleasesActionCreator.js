import axios from 'axios';
import { ACTIONS, API_BASE_PATH, URLS, API_KEY } from '../../constants';
import {todayStr} from '../../helper/movieUtils';
    

function latestReleases(langCode) {
	const filmographyUrl  = `${API_BASE_PATH}${URLS.LATEST_RELEASES_PATH}?api_key=${API_KEY}&with_original_language=${langCode}&sort_by=release_date.desc&primary_release_date.lte=${todayStr()}`;

	return dispatch=> {
		dispatch({
			type: ACTIONS.LATEST_RELEASES_REQUEST_STARTED
		});

		axios.get(filmographyUrl).then(response => {
			dispatch({
				type: ACTIONS.LATEST_RELEASES_REQUEST_COMPLETED,
				payload: response.data
			});
		}).catch(err=> {
			dispatch({
				type: ACTIONS.LATEST_RELEASES_REQUEST_ERROR,
				payload: err
			});
		});
	};
}

export default latestReleases;