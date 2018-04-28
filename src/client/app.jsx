import React from 'react';
import Header from './components/header';
import HomePage from './container/homePage';
import store from './redux/configureStore';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<div className="row">
				<Header />
				<HomePage />
			</div>
		</Provider>
	);
};


export default App;