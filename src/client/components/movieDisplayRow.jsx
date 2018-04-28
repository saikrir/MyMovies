import React from 'react';
import { URLS } from '../constants';
import { formatDate } from '../helper/movieUtils';


let MovieDisplayRow = ({ movieRow }) => {
	return (
		<tr>
			<td scope="row">
				<img src={`${URLS.IMAGE_BASE_PATH}/${movieRow.poster_path}`} />
			</td>
			<td>{movieRow.original_title}</td>
			<td>{movieRow.overview}</td>
			<td>{formatDate(movieRow.release_date)}</td>
		</tr >
	);
};

export default MovieDisplayRow;