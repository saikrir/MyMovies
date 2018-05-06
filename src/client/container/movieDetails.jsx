import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMovieDetails from '../redux/actions/movieDetailsActionCreator';
import MovieInfo from '../components/movieInfo';


class MovieDetails extends Component {
    componentDidMount() {
        const { match: { params: { id: movieId } } } = this.props;
        this.props.loadMovieDetails(movieId);
    }

    render() {
        const { match: { params: { id: movieId } } } = this.props;
        return <MovieInfo movieDetails={this.props.movieDetails} />
    }
}

function mapStateToProps({ movieDetails }, ownProps) {
    return { movieDetails };
}

MovieDetails = connect(mapStateToProps, { loadMovieDetails })(MovieDetails);

export default MovieDetails;