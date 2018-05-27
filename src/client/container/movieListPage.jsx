import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMovieDetails from '../redux/actions/movieDetailsActionCreator';
import MovieDetails from '../components/movieDetails';
import PropTypes from 'prop-types';


class MovieListPage extends Component {
	componentDidMount() {
		const { match: { params: { id: movieId } } } = this.props;
		this.props.loadMovieDetails(movieId);
	}

	render() {
		return <MovieDetails movieDetails={this.props.movieDetails} />;
	}
}


MovieListPage.propTypes = {
	match: PropTypes.object,
	loadMovieDetails: PropTypes.func,
	movieId: PropTypes.string,
	movieDetails: PropTypes.object
};

function mapStateToProps({ movieDetails }) {
	return { movieDetails };
}




/*eslint no-class-assign: 0 */
MovieListPage = connect(mapStateToProps, { loadMovieDetails })(MovieListPage);

export default MovieListPage;