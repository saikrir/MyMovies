import React from 'react';
import Header from './components/header';
import HomePage from './container/homePage';
import MovieListPage from './container/movieListPage';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './container/searchPage';
import Navigation from './components/navigation';


const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Navigation />
					<div className="row" />
					<MovieRouter />
				</div>
			</BrowserRouter>
		</Provider>
	);
};

const MovieRouter = () => {
	return (
		<Switch>
			<Route path="/Details/:id" component={MovieListPage} />
			<Route path="/Search" component={SearchPage} />
			<Route path="/" component={HomePage} />
		</Switch>
	);
};

export default App;
