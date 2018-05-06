import { ACTIONS } from "../../constants";

let movieDetailReducer = (state = {}, action) => {

    console.log("Action : ", action);
    switch (action.type) {
        case ACTIONS.MOVIE_DETAILS_REQUEST_STARTED: {
            console.log("Movie Details Started Loading ", action.payload);
        }
        case ACTIONS.MOVIE_DETAILS_REQUEST_COMPLETED: {
            console.log("Reducer", action.payload);
            return action.payload;
        }
    }

    return state;
}

export default movieDetailReducer;