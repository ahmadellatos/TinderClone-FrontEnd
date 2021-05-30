import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Login') }}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Register') }}>
                    <Text style={{ textAlign: 'center' }}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "10%",
        marginVertical: "55%",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        padding: 15,
        width: "100%",
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100, 0.3)'
    }
})
