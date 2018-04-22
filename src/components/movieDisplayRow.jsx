import React from 'react';


let MovieDisplayRow = ({movieRow}) => {
	return (
		<tr key={movieRow.id}>
			<td scope="row">
				<img src={`http://image.tmdb.org/t/p/w185/${movieRow.poster_path}`} />
			</td>
			<td>{movieRow.original_title}</td>
			<td>{movieRow.overview}</td>
			<td>{movieRow.release_date}</td>
		</tr>
	);
};


export default MovieDisplayRow;