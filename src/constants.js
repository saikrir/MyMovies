export const API_KEY = 'fa30fafc13c23c2ad39084000be87c81';

export const ACTIONS = {
	POPULAR_MOVIES_REQUEST_STARTED : 'popular_movies_request_started',
	POPULAR_MOVIES_REQUEST_COMPLETED : 'popular_movies_request_completed',
	POPULAR_MOVIES_REQUEST_ERROR : 'popular_movies_request_error',  
};

export const URLS = {
	POPULAR_MOVIES_URL : 'https://api.themoviedb.org/3/discover/movie?en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
};