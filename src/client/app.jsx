import React from 'react';
import Header from './components/header';
import HomePage from './container/homePage';
import MovieDetails from './container/movieDetails';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="row">
					<Header />
					<MovieRouter />
				</div>
			</BrowserRouter>
		</Provider>
	);
};

const MovieRouter = () => {
	return (
		<Switch>
			<Route path="/Details/:id" component={MovieDetails} />
			<Route path="/" component={HomePage} />
		</Switch>
	);
};

export default App;
