import axios from 'axios'
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { LoginAction } from './Redux/Action'
import { connect } from 'react-redux'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            nomorhandphone: ''
        }
    }

    handleLogin = () => {
        axios.get('http://192.168.100.4:8080/login/', {
            params: {
                username: this.state.username,
                nomorhandphone: this.state.nomorhandphone
            }
        })
            .then((response) => {
                let data = response.data;
                if (data !== "") {
                    this.props.LoginAction(true, "isLogin")
                    this.props.LoginAction(data, "dataUser")
                    // alert("Login berhasil")
                    this.props.navigation.navigate('MainMenu')
                } else {
                    alert("login gagal")
                    this.props.LoginAction(false, "isLogin")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.component}> Username: </Text>
                <TextInput style={styles.textinput} placeholder="Masukan Username" onChangeText={(text) => { this.setState({ username: text }) }} />
                <Text style={styles.component}>No HP:</Text>
                <TextInput style={styles.textinput} placeholder="Masukan Nomor HP" onChangeText={(text) => { this.setState({ nomorhandphone: text }) }} />
                <TouchableOpacity style={styles.submitbutton} onPress={this.handleLogin.bind(this)}>
                    <Text style={{ textAlign: 'center' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View >
        )
    }
}


const mapStateToProps = (state) => ({
    dataMapping: state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    component: {
        marginTop: 10
    },
    textinput: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100, 0.3)'
    },
    submitbutton: {
        marginTop: 10,
        padding: 5,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100, 0.3)'
    }
})
