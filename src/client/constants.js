export const API_KEY = 'fa30fafc13c23c2ad39084000be87c81';
export const API_BASE_PATH = 'https://api.themoviedb.org/';
export const THRILLER_GENRE = '9648';
//export const API_BASE_PATH = 'http://localhost:3000';
export const IMDB_BASE_PATH = 'https://www.imdb.com/title/';
export const IMAGE_BASE_PATH = 'http://image.tmdb.org/t/p/w185/';
const API_VERSION = '3';

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
	POPULAR_MOVIES_PATH: `${API_VERSION}/discover/movie?en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`,
	MOVIE_GENRES: `${API_VERSION}/genre/movie/list?language=en-US`,
	MOVIE_DETAILS: `${API_VERSION}/movie/`,
	MOVIE_CREDITS_PATH: `${API_VERSION}/movie/{movie_id}/credits`,
	SEARCH_MOVIES_PATH: `${API_VERSION}/search/movie`,
	LATEST_RELEASES_PATH: `${API_VERSION}/discover/movie`
};


export const genresArray = [{
	'id': 28,
	'name': 'Action'
}, {
	'id': 12,
	'name': 'Adventure'
}, {
	'id': 16,
	'name': 'Animation'
}, {
	'id': 35,
	'name': 'Comedy'
}, {
	'id': 80,
	'name': 'Crime'
}, {
	'id': 99,
	'name': 'Documentary'
}, {
	'id': 18,
	'name': 'Drama'
}, {
	'id': 10751,
	'name': 'Family'
}, {
	'id': 14,
	'name': 'Fantasy'
}, {
	'id': 36,
	'name': 'History'
}, {
	'id': 27,
	'name': 'Horror'
}, {
	'id': 10402,
	'name': 'Music'
}, {
	'id': 9648,
	'name': 'Mystery'
}, {
	'id': 10749,
	'name': 'Romance'
}, {
	'id': 878,
	'name': 'Science Fiction'
}, {
	'id': 10770,
	'name': 'TV Movie'
}, {
	'id': 53,
	'name': 'Thriller'
}, {
	'id': 10752,
	'name': 'War'
}, {
	'id': 37,
	'name': 'Western'
}];