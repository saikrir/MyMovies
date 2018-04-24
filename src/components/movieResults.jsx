import React from 'react';
import MovieDisplayRow from './movieDisplayRow';

let MovieResults = ({ results }) => {
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
				{results.map(result => <MovieDisplayRow movieRow={result} key={result.id} />)}
			</tbody>
		</table>
	);
};

export default MovieResults;