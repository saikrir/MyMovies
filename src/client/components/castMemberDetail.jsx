import React from 'react';
import { URLS } from '../constants';

const cardStyle = {
	width: '12rem'
};


const CastMemberDetail = ({ castMember }) =>
	<li>
		<div className="card" style={cardStyle}>
			<img className="card-img-top" src={`${URLS.IMAGE_BASE_PATH}/${castMember.profile_path}`} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{castMember.name}</h5>
				<p className="card-text">{castMember.character}</p>
			</div>
		</div>
	</li >;


export default CastMemberDetail;