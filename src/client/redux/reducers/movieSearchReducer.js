import { ACTIONS } from '../../constants';

function movieSearchReducer(currentState = {}, action) {
	let newState = currentState;
	switch (action.type) {
		case ACTIONS.MOVIE_SEARCH_COMPLETED: {
			newState = {
				success: true,
				results: action.payload.results
			};
			break;
		}
		case ACTIONS.MOVIE_SEARCH_ERROR: {
			newState = {
				success: false,
				error: action.payload
			};
			break;
		}
	}
	return newState;
}

export default movieSearchReducer;