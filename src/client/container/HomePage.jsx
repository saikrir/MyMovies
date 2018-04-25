import React from 'react';
import {connect} from 'react-redux';
import {loadPopularMovies, loadGenres} from '../redux/actions/popularMoviesActionCreator';
import MovieResults from '../components/movieResults';

class HomePage extends React.Component {

	componentDidMount(){
		this.props.loadPopularMovies();
		this.props.loadGenres();
	}

	render() {
		return (<div className="container"> 
			<MovieResults results={this.props.popularMovies} />    
		</div>);
	}
}

let mapStateToProps = ({popularMovies, genres})=> {
	return {popularMovies, genres};
};


export default connect(mapStateToProps,{loadPopularMovies, loadGenres})(HomePage);
