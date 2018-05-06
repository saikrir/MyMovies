import { API_BASE_PATH, ACTIONS, URLS, API_KEY } from "../../constants";
import axios from "axios";

const loadMovieDetails = (movieId = 0) => {

    return dispatch => {
        dispatch({
            type: ACTIONS.MOVIE_DETAILS_REQUEST_STARTED,
            payload: movieId
        });

        const movieRequestUrl = `${API_BASE_PATH}${URLS.MOVIE_DETAILS}${movieId}?api_key=${API_KEY}`;

        axios.get(movieRequestUrl).then(res => {
            dispatch({
                type: ACTIONS.MOVIE_DETAILS_REQUEST_COMPLETED,
                payload: res.data
            });
        }).catch(error => {
            dispatch({
                type: ACTIONS.MOVIE_DETAILS_REQUEST_ERROR,
                payload: error
            })
        })
    };
}

export default loadMovieDetails;