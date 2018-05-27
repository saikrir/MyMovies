import React from 'react';
import { Field } from 'redux-form';


const cardStyle = {
	width: '48rem'
};

const SearchForm = () =>
	<div className={['card'].join(' ')} style={cardStyle}>
		<div className="card-header">
			Search Movies
		</div>
		<div className='form-group'>
			<label htmlFor="searchQuery">Search</label>
			<Field component="input" className="form-control" id="searchQuery" name="searchQuery" placeholder="Movie name" />
		</div>
		<div className='form-group'>
			<label htmlFor="language">Language</label>
			<Field className="form-control" id="language" name="language" component="select">
				<option value="en">English</option>
				<option value="hi">Hindi</option>
				<option value="te">Telugu</option>
				<option value="ta">Tamil</option>
			</Field>
		</div>
		<button className={['btn', 'btn-primary'].join(' ')} type="submit">Search</button>

		<div className="card-footer">
			&nbsp;
		</div>
	</div>;

export default SearchForm;