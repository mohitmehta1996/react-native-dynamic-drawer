import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Divider } from 'react-native-elements';

export default class GuestDrawerContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const items = require('../assets/drawer.json');
		return (
			<DrawerContentScrollView style={{}}>

				<DrawerItem
					label="Home"
					onPress={() => this.props.navigation.navigate("Dashboard")}
				/>
				<Divider style={{ backgroundColor: 'black' }} />
				<Divider style={{ backgroundColor: 'black' }} />

				{items.map(each => (
					<View>
						<DrawerItem
							label={each.title}
							onPress={(item) =>
								this.props.navigation.navigate({
									name: 'Category',
									params: {
										category: each
									},
									key: Math.random () * 10000
								})
							}
						/>
						<Divider style={{ backgroundColor: 'black' }} />
					</View>
				))}

			</DrawerContentScrollView>
		);
	}

}

