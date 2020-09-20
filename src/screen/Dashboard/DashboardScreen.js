/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loaded: true,
            is_admin: "0"
        }
    }
   
    render() {
        return (
            <>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.introPara}>
                                Checkout the dynamic sidebar. Just swipe right.
                            </Text>

                            <Text style={styles.introPara}>
                                Currently data is coming from JSON file whihc is placed in assets folder.
                            </Text>

                            <Text style={styles.introPara}>
                                You can user axios or fetch instead of JSON.
                            </Text>

                        </View>
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
