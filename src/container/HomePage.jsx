import React from 'react';
import {connect} from 'react-redux';
import loadPopularMovies from '../redux/actions/popularMoviesActionCreator';
import MovieResults from '../components/movieResults';

class HomePage extends React.Component {

	componentDidMount(){
		this.props.loadPopularMovies();
	}

	render() {
		return (<div className="container"> 
			<MovieResults results={this.props.popularMovies} />    
		</div>);
	}
}

let mapStateToProps = ({popularMovies})=> {
	return {popularMovies};
};


export default connect(mapStateToProps,{loadPopularMovies})(HomePage);
