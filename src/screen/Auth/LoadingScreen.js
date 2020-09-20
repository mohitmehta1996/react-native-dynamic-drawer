import React from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';

//ThirdParty
import CustomSplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { Transitioning, Transition } from 'react-native-reanimated';

//Redux
import { connect } from 'react-redux';
import { store } from '../../store/index';
import { updateuser, updatelanguage } from '../../actions/userActions';

//Custom Modules
import AuthNavigator from '../../navigator/AuthNavigator';

import { API_USERSME, THEME_COLOR } from '../../constant';

const transition_fade = (
	<Transition.Sequence>
		<Transition.Together>
			<Transition.In type="fade" durationMs={600} delayMs={0} />
		</Transition.Together>
	</Transition.Sequence>
);

const transition = transition_fade;

class LoadingScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		CustomSplashScreen.hide();
		this.getAsyncData();
		this.vref = React.createRef();
	}

	async getAsyncData() {
		let data1 = await AsyncStorage.getItem('data');
		let user1 = JSON.parse(data1)
		store.dispatch(updateuser(data1));
		return;
	
	};

	render() {
		if (this.props.loginStatus === -1) {
			// We haven't finished checking for the user logged in or not
			return (
				<View style={styles.container}>
						<Image source={require('../../assets/images/ic_logo2.png')} style={styles.appImage} />
				</View>);
		}

		this.vref && this.vref.current && this.vref.current.animateNextTransition();

		return (
			<NavigationContainer>
				<Transitioning.View ref={this.vref} transition={transition} style={styles.transitionContainer}>
					<AuthNavigator />
				</Transitioning.View>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	transitionContainer: { flex: 1, backgroundColor: '#FFFFFF' },
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: THEME_COLOR,
	},
	appImage:{
		height: 380,
		resizeMode: 'contain',
	}
});

const mapStateToProps = (store) => {
	return {
		userdata: store.user.userdata,
		loginStatus: store.user.loginStatus,
	};
};

export default connect(mapStateToProps)(LoadingScreen);
