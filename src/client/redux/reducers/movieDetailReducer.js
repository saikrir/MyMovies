import { ACTIONS } from '../../constants';

let movieDetailReducer = (state = {}, action) => {
	switch (action.type) {
	case ACTIONS.MOVIE_DETAILS_REQUEST_STARTED: {
		break;
	}
	case ACTIONS.MOVIE_DETAILS_REQUEST_COMPLETED: {
		state = action.payload;
		break;
	}
	}
	return state;
};

export default movieDetailReducer;