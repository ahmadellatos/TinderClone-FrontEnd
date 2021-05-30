import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Src/Register'
import Home from './Src/Home'
import Login from './Src/Login'
import { Provider } from 'react-redux'
import Store from './Src/Redux/Store'
import MainMenu from './Src/MainMenu'
import PilihCalon from './Src/PilihCalon'



const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fe3c72',
              },
              headerTintColor: '#fff'
            }}>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Tinder Clone', headerTitleAlign: 'center' }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Main Menu', headerLeft: false, headerTitleAlign: 'center' }} />
            <Stack.Screen name="PilihCalon" component={PilihCalon} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
