import React from 'react';
import PropTypes from 'prop-types';
import { URLS } from '../constants';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../helper/movieUtils';
import CastMemberDetail from './castMemberDetail';

const cardStyle = {
	width: '24rem'
};

const MovieDetails = ({ movieDetails }) =>
	<div className="container">
		<div className="row">
			<div className="col-6">
				<div className="card" style={cardStyle}>
					<img className="card-img-top" src={`${URLS.IMAGE_BASE_PATH}/${movieDetails.poster_path}`} alt="Movie Poster" />
					<div className="card-body">
						<h5 className="card-title">{movieDetails.original_title}</h5>
						<p className="card-text">{movieDetails.overview}</p>
					</div>
					<ul className={['list-group', 'list-group-flush'].join(' ')}>
						<li className="list-group-item"><b>Rating: </b> {movieDetails.vote_average}</li>
						<li className="list-group-item"><b>Genres: </b> {movieDetails.genres && movieDetails.genres.map(g => g.name).join(',')}</li>
						<li className="list-group-item"><b>Genres: </b> {formatDate(movieDetails.release_date)}</li>
					</ul>
					<div className="card-body">
						<NavLink to="/" className="card-link">Home</NavLink>
						<a href={`${URLS.IMDB_BASE_PATH}${movieDetails.imdb_id}`} className="card-link" target="_blank"> IMDB </a>
					</div>
				</div>
			</div>
			<div className="col-6">
				<h2>Cast </h2>
				<ul className="list-unstyled">
					{movieDetails.cast && movieDetails.cast.map(castMember => <CastMemberDetail key={castMember.cast_id} castMember={castMember} />)}
				</ul>
			</div>
		</div>
	</div>;

MovieDetails.propTypes = {
	movieDetails: PropTypes.array
};

export default MovieDetails;