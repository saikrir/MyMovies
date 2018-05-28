import { ACTIONS } from '../../constants';

function filmographyReducer(currentState=[], action) {
	switch(action.type) {
	case ACTIONS.FILMOGRAPHY_REQUEST_COMPLETED: {
		return action.payload.results;
	}
	}   
	return currentState;
}

export default filmographyReducer;