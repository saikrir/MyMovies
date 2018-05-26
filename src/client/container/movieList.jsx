import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMovieDetails from '../redux/actions/movieDetailsActionCreator';
import MovieDetails from '../components/movieDetails';
import PropTypes from 'prop-types';


class MovieList extends Component {
	componentDidMount() {
		const { match: { params: { id: movieId } } } = this.props;
		this.props.loadMovieDetails(movieId);
	}

	render() {
		return <MovieDetails movieDetails={this.props.movieDetails} />;
	}
}


MovieList.propTypes = {
	match: PropTypes.object,
	loadMovieDetails: PropTypes.func,
	movieId: PropTypes.string,
	movieDetails: PropTypes.object
};

function mapStateToProps({ movieDetails }) {
	return { movieDetails };
}




/*eslint no-class-assign: 0 */
MovieList = connect(mapStateToProps, { loadMovieDetails })(MovieList);

export default MovieList;