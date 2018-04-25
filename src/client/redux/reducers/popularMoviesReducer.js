import { ACTIONS } from '../../constants';



let popularMovieReducer = (state= [], action) => {
	switch(action.type){
	case ACTIONS.POPULAR_MOVIES_REQUEST_COMPLETED: {
		return action.payload.results;
	}
	}
	return state;
};

export default popularMovieReducer;