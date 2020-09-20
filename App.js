import React from 'react';
import { StatusBar, Alert } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store/index';

import LoadingScreen from './src/screen/Auth/LoadingScreen';

StatusBar.setBarStyle('light-content', true);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.disableYellowBox = true;
		return (
			<Provider store={store}>
				<LoadingScreen />
			</Provider>
		);
	}
}

export default App;
