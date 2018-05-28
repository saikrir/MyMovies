import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import loadFilmograhy from '../redux/actions/filmographyActionCreator';
import MovieResults from '../components/movieResults';

class Filmography extends Component {
	constructor(props){
		super(props);
	}   

	componentDidMount(){
		let {match: { params: {id: personId}}} = this.props;
		this.props.loadFilmograhy(personId);
	}

	render() {

		let {filmography, match: {params: {name: personsName}}} = this.props;

		return <div className='container'>
			<div className='row'>
				<h2> Filmograhy page {`:${personsName}`} </h2>
			</div>
			<MovieResults results={filmography} />
		</div>;
	}
}

Filmography.propTypes = {
	match: PropTypes.object,
	loadFilmograhy: PropTypes.func,
	filmography: PropTypes.array
};

function mapStateToProps({filmography}){
	return {filmography};
}

/* eslint no-class-assign: 0 */
Filmography = connect(mapStateToProps, {loadFilmograhy})(Filmography);

export default Filmography;