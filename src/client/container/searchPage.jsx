import React, { Component } from 'react';
import SearchForm from '../components/searchForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import searchMovies from '../redux/actions/movieSearchActionCreator';
import MovieResults from '../components/movieResults';


class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.handleMovieSearch = this.handleMovieSearch.bind(this);
	}

	handleMovieSearch(values) {
		this.props.searchMovies(values);
	}

	render() {
		const { searchResults, handleSubmit, callStatus, error } = this.props;
		let resultsOrError = callStatus ? <MovieResults results={searchResults} showGenres={true} /> : error;

		return (
			<form onSubmit={handleSubmit(this.handleMovieSearch)}>
				<div className="container">
					<SearchForm />
					{resultsOrError}
				</div>
			</form>
		);
	}
}

SearchPage.propTypes = {
	handleSubmit: PropTypes.func,
	searchMovies: PropTypes.func,
	searchResults: PropTypes.array,
	callStatus: PropTypes.bool,
	error: PropTypes.object
};

const mapStateToProps = ({ movieSearchResults }) => {
	return {
		searchResults: movieSearchResults.results || [],
		callStatus: movieSearchResults.success || true,
		error: movieSearchResults.error || {}
	};
};


/* eslint no-class-assign: 0 */
SearchPage = connect(mapStateToProps, { searchMovies })(SearchPage);
export default reduxForm({
	form: 'SearchForm'
})(SearchPage);

