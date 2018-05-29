import React from 'react';
import PropTypes from 'prop-types';
import MovieDisplayRow from './movieDisplayRow';

let MovieResults = ({ results, showGenres }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">Title</th>
					<th scope="col">Overview</th>
					<th scope="col">Release data</th>
				</tr>
			</thead>
			<tbody>
				{results.map(result => <MovieDisplayRow movieRow={result} key={result.id} showGenres={showGenres} />)}
			</tbody>
		</table>
	);
};

MovieResults.propTypes = {
	results: PropTypes.array,
	showGenres: PropTypes.bool
};

export default MovieResults;