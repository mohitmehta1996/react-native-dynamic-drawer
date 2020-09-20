import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import GuestDrawerContent from './GuestDrawerContent'

import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import CategoryScreen from '../screen/Dashboard/CategoryScreen';

const AuthStack = createStackNavigator();

const AuthNavigator1 = (pops) => {
	return (
		<AuthStack.Navigator initialRouteName="Home">
			<AuthStack.Screen name="Dashboard" component={DashboardScreen}
				options={{
				title: "Dynamic Drawer",
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => pops.navigation.toggleDrawer()}
						style={{ flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 15}}
					>
					<Icon
						onPress={() => pops.navigation.toggleDrawer()}
						name="bars"
						size={20}
						color="black"
					/>
					</TouchableOpacity>
				),
				}}
			/>
			<AuthStack.Screen name="Category" component={CategoryScreen} />
		</AuthStack.Navigator>
	);
}

const Drawer = createDrawerNavigator()

const AuthNavigator = (pops) => {
	return (
      <Drawer.Navigator drawerContent={props => <GuestDrawerContent {...props} />}>
			<Drawer.Screen name='Home' component={AuthNavigator1} />
		</Drawer.Navigator>
	)
}

export default AuthNavigator;
