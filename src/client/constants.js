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
	GENRES_REQUEST_ERROR: 'genres_request_error',
	MOVIE_DETAILS_REQUEST_STARTED: 'movie_details_request_started',
	MOVIE_DETAILS_REQUEST_COMPLETED: 'movie_details_request_completed',
	MOVIE_DETAILS_REQUEST_ERROR: 'movie_details_request_error',
	MOVIE_SEARCH_STARTED: 'movie_search_request_started',
	MOVIE_SEARCH_COMPLETED: 'movie_search_request_completed',
	MOVIE_SEARCH_ERROR: 'movie_search_request_error',
	FILMOGRAPHY_REQUEST_STARTED: 'filmography_request_started',
	FILMOGRAPHY_REQUEST_COMPLETED: 'filmography_request_completed',
	FILMOGRAPHY_REQUEST_ERROR: 'filmography_request_error',
	LATEST_RELEASES_REQUEST_STARTED: 'latest_movies_request_started',
	LATEST_RELEASES_REQUEST_COMPLETED: 'latest_movies_request_completed',
	LATEST_RELEASES_REQUEST_ERROR: 'latest_movies_request_error',

};

export const URLS = {
	POPULAR_MOVIES_PATH: '/3/discover/movie?en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1',
	IMAGE_BASE_PATH: 'http://image.tmdb.org/t/p/w185/',
	MOVIE_GENRES: '/3/genre/movie/list?language=en-US',
	MOVIE_DETAILS: '/3/movie/',
	IMDB_BASE_PATH: 'https://www.imdb.com/title/',
	MOVIE_CREDITS_PATH: '/3/movie/{movie_id}/credits',
	SEARCH_MOVIES_PATH: '/3/search/movie',
	LATEST_RELEASES_PATH: '/3/discover/movie'
};
