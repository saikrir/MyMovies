import React from 'react';
import { connect } from 'react-redux';
import { loadPopularMovies, loadGenres, loadFavoriteMovies } from '../redux/actions/popularMoviesActionCreator';
import MovieResults from '../components/movieResults';
import { reduxForm, formValueSelector, Field } from 'redux-form';


class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.renderSelect = this.renderSelect.bind(this);
		this.genreOptions = this.genreOptions.bind(this);
	}

	componentDidMount() {
		this.props.loadFavoriteMovies();
	}

	componentWillReceiveProps(newProps) {
		if (newProps.selectedGenre !== this.props.selectedGenre) {
			this.props.loadPopularMovies(newProps.selectedGenre);
		}
	}

	genreOptions() {
		let { genres } = this.props;
		let options = <option value='' >-- Select One--</option>;

		if (genres && genres.length > 0) {
			options = genres.map((genre) => <option value={genre.id} key={genre.id}> {genre.name} </option>);
		}

		return options;
	}

	renderSelect(field) {
		return (
			<select className="form-control" {...field.input}>
				{field.options}
			</select>
		);
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.props.handleSubmit}>
					<div className="float-right">
						<div className="form-group">
							<label htmlFor="genre">Genres: </label>
							<Field name="genre" component={this.renderSelect} id="genre" options={this.genreOptions()} />
						</div>
					</div>
					<MovieResults results={this.props.popularMovies} />
				</form>
			</div>);
	}
}

let mapStateToProps = (state) => {
	let { form, popularMovies, genres } = state;
	const selectedGenre = formValueSelector('HomePage')(state, 'genre');
	return { selectedGenre, popularMovies, genres };
};


HomePage = connect(mapStateToProps, { loadPopularMovies, loadGenres, loadFavoriteMovies })(HomePage);
export default reduxForm({
	form: 'HomePage'
})(HomePage);
