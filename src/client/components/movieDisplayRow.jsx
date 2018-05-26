import React from 'react';
import { URLS } from '../constants';
import { formatDate } from '../helper/movieUtils';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


let MovieDisplayRow = ({ movieRow }) =>
	<tr>
		<td scope="row">
			<NavLink to={`/Details/${movieRow.id}`}>
				<img src={`${URLS.IMAGE_BASE_PATH}/${movieRow.poster_path}`} />
			</NavLink>
		</td>
		<td>{movieRow.original_title}</td>
		<td>{movieRow.overview}</td>
		<td>{formatDate(movieRow.release_date)}</td>
	</tr >;

MovieDisplayRow.propTypes = {
	movieRow: PropTypes.object
};

export default MovieDisplayRow;