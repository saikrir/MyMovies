import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';


const cardStyle = {
	width: '48rem'
};

const validateMovieName = value => {
	return value ? undefined : 'Movie Name field is required';
};

const renderInput = ({ input, meta, ...rest }) => {
	return <div>
		<input  {...input} {...rest} />
		{(meta.touched && meta.invalid) &&
			(<div className='bg-danger'>
				{meta.error}
			</div>)}
	</div>;
};

const normalizeSearch = value => value && value.toUpperCase();


const SearchForm = () =>
	<div className={['card'].join(' ')} style={cardStyle}>
		<div className="card-header">
			Search Movies
		</div>
		<div className='form-group'>
			<label htmlFor="searchQuery">Search</label>
			<Field component={renderInput} className="form-control" id="searchQuery" name="searchQuery" placeholder="Movie name"
				validate={[validateMovieName]}
				normalize={normalizeSearch} />
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

SearchForm.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object
};

export default SearchForm;