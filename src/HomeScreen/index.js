import React, { Component } from 'react'
import Profile from '../ProfileScreen/index.js'
import SideBar from '../SideBar/SideBar.js'
import Login from '../Login.js'
import {HomeTabs, HomeStack} from './HomeTabs'
import { DrawerNavigator } from 'react-navigation'
import {AppHeader} from '../AppHeader/AppHeader'
const HomeScreenRouter = DrawerNavigator(
  {
    Profile: { screen: Profile },
    Logout: { 
      screen: Login
    },
    Home: {
      screen: HomeStack
    }
  },
  {
    drawerPosition: 'right',
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />
  }
)
export default HomeScreenRouter