import axios from 'axios'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'




export class PilihCalon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
        }
    }

    componentDidMount = () => {
        axios.get('http://192.168.100.4:8080/user/')
            .then((response) => {
                this.setState({ data: response.data })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }




    render() {
        return (
            <View >

            </View>
        )
    }
}

export default PilihCalon


const styles = StyleSheet.create({

})