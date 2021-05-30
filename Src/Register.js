import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Image, ScrollView, SafeAreaView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'
// import FormData from 'form-data'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            nama: '',
            jeniskelamin: '',
            nomorhandphone: '',
            umur: 0,
            gambar: null,
            latitude: '',
            longitude: ''
        }
    }


    componentDidMount = () => {
        this.getLocation()
        this.getImagePermission()
    }

    getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        this.setState({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    }

    getImagePermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    getImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            this.setState({ gambar: result.uri })
        }
    }


    addUserData = () => {
        axios.post('http://192.168.100.4:8080/register/', this.state)
            .then((response) => {
                alert(response.data)
                this.props.navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error)
            })
    }



    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.component}>
                        <Text> Username : </Text>
                        <TextInput style={styles.textinput} placeholder="Username" onChangeText={(text) => { this.setState({ username: text }) }} />
                    </View>
                    <View style={styles.component}>
                        <Text> Nama : </Text>
                        <TextInput style={styles.textinput} placeholder="Nama" onChangeText={(text) => { this.setState({ nama: text }) }} />
                    </View>
                    <View style={styles.component}>
                        <Text> Jenis Kelamin : </Text>
                        <Picker
                            style={{ width: '100%', height: 20 }}
                            selectedValue={"Pilih Menu"}
                            onValueChange={(itemValue) =>
                                this.setState({ jeniskelamin: itemValue })
                            }>
                            <Picker.Item label="Pilih Menu" enabled={false} />
                            <Picker.Item label="Laki-Laki" value="laki" />
                            <Picker.Item label="Perempuan" value="perempuan" />
                        </Picker>
                    </View>
                    <View style={styles.component}>
                        <Text>Nomor Handphone :</Text>
                        <TextInput style={styles.textinput} placeholder="Nomor Handphone" onChangeText={(text) => { this.setState({ nomorhandphone: text }) }} />
                    </View>
                    <View style={styles.component}>
                        <Text>Umur : </Text>
                        <TextInput style={styles.textinput} placeholder="Umur" onChangeText={(text) => { this.setState({ umur: text }) }} />
                    </View>
                    <View style={styles.component}>
                        <Text>Gambar :</Text>
                        <Button title="Pick an image from camera roll" onPress={this.getImage.bind(this)} />
                        {this.state.gambar && <Image source={{ uri: this.state.gambar }} style={{ width: 200, height: 200, marginTop: 10, alignItems: 'center' }} />}
                    </View>
                    <TouchableOpacity style={styles.submitbutton} onPress={this.addUserData.bind(this)}>
                        <Text style={{ textAlign: 'center' }}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

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
