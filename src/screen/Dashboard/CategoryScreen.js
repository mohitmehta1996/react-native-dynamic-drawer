/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Loader from '../../component/Loader'

export default class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        category: false,
    };
    async componentDidMount() {
		const { navigation } = this.props;
		this._unsubscribe = navigation.addListener('focus', () => {
			this.setData();
		});
	}
	componentWillUnmount() {
		this._unsubscribe();
    }
    async setData() {
        let category = this.props.route.params.category;
        await this.setState({
            category: category,
        })
    }
    render() {
        return (
            <>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        {this.state.category == false &&
                            <Loader />
                        }
                        {this.state.category &&
                            <View style={styles.sectionContainer}>
                                <Text style={styles.introPara}>
                                    Category name: {this.state.category.title}
                                </Text>
                                <Text style={styles.introPara}>
                                    Category id: {this.state.category.id}
                                </Text>
                            </View>
                        }
                    </View>
                </ScrollView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        textAlign: "center"
    },
    scrollView: {
        backgroundColor: "#fff",
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: "#fff",
        paddingBottom: 30
    },
    sectionContainer: {
        paddingHorizontal: 24,
    },
    introPara: {
        fontSize: 16,
        textAlign: "left",
        marginTop: 15,
    },
});
