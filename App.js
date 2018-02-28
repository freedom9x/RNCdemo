import React, { Component } from 'react'
import Expo from 'expo'
import HomeScreen from './src/HomeScreen/index.js'
import {StackNavigator} from 'react-navigation'
import Login from './src/Login'
import { Container, 
  Header, Title, Left, Icon, Right, Button, Body, Content,Text
} from 'native-base'
const RootStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null } 
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null } 
  },
},
{
  initialRouteName: 'Login',
})

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return <RootStack />
  }
}