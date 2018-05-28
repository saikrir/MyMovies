import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import latestReleases from '../redux/actions/latestReleasesActionCreator';
import PropTypes from 'prop-types';
import MovieResults from '../components/movieResults';

const ENGLISH = 'en';

class LatestReleases extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.latestReleases(ENGLISH);
	}


	componentWillReceiveProps({ selectedLanguage }) {
		let { latestReleases, selectedLanguage: previousLanguage } = this.props;

		if (selectedLanguage != previousLanguage) {
			latestReleases(selectedLanguage);
		}
	}

	renderSelect(field) {
		return (
			<select className="form-control" {...field.input}>
				<option value="en">English</option>
				<option value="hi">Hindi</option>
				<option value="te">Telugu</option>
				<option value="ta">Tamil</option>
			</select>
		);
	}

	render() {
		let { results, handleSubmit } = this.props;
		return (<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="float-right">
					<div className="form-group">
						<label htmlFor="languages">Languages: </label>
						<Field name="languages" component={this.renderSelect} id="languages" />
					</div>
				</div>
			</form>
			<MovieResults results={results} />
		</div>);
	}
}

LatestReleases.propTypes = {
	latestReleases: PropTypes.func,
	handleSubmit: PropTypes.func,
	selectedLanguage: PropTypes.string,
	results: PropTypes.array
};

function mapStateToPros(state) {
	const selectedLanguage = formValueSelector('LatestReleases')(state, 'languages') || ENGLISH;
	let { latestMovies: { results = [], success: callStatus } } = state;

	return {
		initialValues: {
			languages: selectedLanguage,
		},
		selectedLanguage,
		results,
		callStatus
	};
}

/*eslint no-class-assign: 0 */
LatestReleases = connect(mapStateToPros, { latestReleases })(LatestReleases);
export default reduxForm({
	form: 'LatestReleases'
})(LatestReleases);

