import { ACTIONS } from '../../constants';


let initialState = {
	results: [],
	success: true
};

function latestMoviesReducer(currentState=initialState, action){
	let newState = currentState;
	switch(action.type) {
	case ACTIONS.LATEST_RELEASES_REQUEST_COMPLETED: {
		let results = action.payload.results;
		newState = Object.assign(currentState, {results, success: true});
		break;
	}
	case ACTIONS.LATEST_RELEASES_REQUEST_ERROR: {
		newState = Object.assign(currentState, {results: [], success: false});
		break;
	}
	}
	return newState;
}


export default latestMoviesReducer;