import React from 'react';
import { URLS } from '../constants';
import { formatDate, genereLabels } from '../helper/movieUtils';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


let MovieDisplayRow = ({ movieRow, showGenres = false }) =>
	<tr>
		<td scope="row">
			<NavLink to={`/Details/${movieRow.id}`}>
				<img src={`${URLS.IMAGE_BASE_PATH}/${movieRow.poster_path}`} />
			</NavLink>
		</td>
		<td>{movieRow.title}</td>
		<td>{movieRow.overview} <br/><b>
			{showGenres ?
		  `Genres: ${genereLabels(movieRow.genre_ids)}`: '' }
		</b></td>
		<td>{formatDate(movieRow.release_date)}</td>
	</tr >;

MovieDisplayRow.propTypes = {
	movieRow: PropTypes.object,
	showGenre: PropTypes.bool
};

export default MovieDisplayRow;