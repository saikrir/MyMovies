import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMovieDetails from '../redux/actions/movieDetailsActionCreator';
import MovieDetails from '../components/movieDetails';


class MovieList extends Component {
	componentDidMount() {
		const { match: { params: { id: movieId } } } = this.props;
		this.props.loadMovieDetails(movieId);
	}

	render() {
		const { match: { params: { id: movieId } } } = this.props;
		return <MovieDetails movieDetails={this.props.movieDetails} />;
	}
}

function mapStateToProps({ movieDetails }, ownProps) {
	return { movieDetails };
}

MovieList = connect(mapStateToProps, { loadMovieDetails })(MovieList);

export default MovieList;