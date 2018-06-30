import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_BASE_PATH } from '../constants';
import { NavLink } from 'react-router-dom';

const cardStyle = {
	width: '12rem'
};


const CastMemberDetail = ({ castMember }) =>
	<li>
		<div className="card" style={cardStyle}>
			<img className="card-img-top" src={`${IMAGE_BASE_PATH}/${castMember.profile_path}`} alt="Card image cap" />
			<div className="card-body">

				<NavLink to={`/Filmography/${castMember.id}/${castMember.name}`}>
					<h5 className="card-title">
						{castMember.name}</h5>
				</NavLink>
				<p className="card-text">{castMember.character}</p>
			</div>
		</div>
	</li>;

CastMemberDetail.propTypes = {
	castMember: PropTypes.object
};
export default CastMemberDetail;