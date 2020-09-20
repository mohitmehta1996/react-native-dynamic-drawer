/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';
import { THEME_COLOR } from "../constant"

export default class Loader extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.wrapper}>
                        <ActivityIndicator size="large" color={THEME_COLOR} />
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#00000040"
    },
    wrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});
