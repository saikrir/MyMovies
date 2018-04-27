export const API_KEY = 'fa30fafc13c23c2ad39084000be87c81';
export const API_BASE_PATH = 'https://api.themoviedb.org/';
export const THRILLER_GENRE = '9648';
//export const API_BASE_PATH = 'http://localhost:3000';

export const ACTIONS = {
	POPULAR_MOVIES_REQUEST_STARTED: 'popular_movies_request_started',
	POPULAR_MOVIES_REQUEST_COMPLETED: 'popular_movies_request_completed',
	POPULAR_MOVIES_REQUEST_ERROR: 'popular_movies_request_error',
	GENRES_REQUEST_STARTED: 'genres_request_started',
	GENRES_REQUEST_COMPLETED: 'genres_request_completed',
	GENRES_REQUEST_ERROR: 'genres_request_error'
};



export const URLS = {
	POPULAR_MOVIES_URL: '/3/discover/movie?en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1',
	IMAGE_BASE_PATH: 'http://image.tmdb.org/t/p/w185/',
	MOVIE_GENRES: '/3/genre/movie/list?language=en-US'
};