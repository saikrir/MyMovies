import { ACTIONS } from '../../constants';

let genresReducer = (state= [], action) => {
	switch(action.type){
	case ACTIONS.GENRES_REQUEST_COMPLETED: {
		return action.payload.genres;
	}
	}
	return state;
};

export default genresReducer;
