import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { LoginAction } from './Redux/Action'

export class MainMenu extends Component {


    handleSignOut() {
        alert("Anda berhasil sign out")
        this.props.LoginAction(false, "isLogin")
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: 'center' }}>Data Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("PilihCalon") }}>
                    <Text style={{ textAlign: 'center' }}>Pilih Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handleSignOut.bind(this)}>
                    <Text style={{ textAlign: 'center' }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    dataRedux: state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "10%",
        marginVertical: "35%",
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
