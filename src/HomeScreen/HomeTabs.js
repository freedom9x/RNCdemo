import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Button, Text, Icon, Footer, FooterTab, StyleProvider } from 'native-base'
import {NotificationList, NotificationListStack} from './NotificationList'
import {PeopleList, PeopleListStack} from './PeopleList'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'
export const HomeTabs = TabNavigator(
  {
    Notifications: { 
      screen: NotificationListStack
    },
    People: {
      screen: PeopleListStack
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarComponent: props => {
      const {index} = props.navigationState
      const iconClass = (name, selfIndex)=>{
        if(index===selfIndex){
          return name
        }else{
          return name + '-outline'
        }
      }
      return (
        <StyleProvider style={getTheme(platform)}>
          <Footer>
            <FooterTab>
              <Button
                transparent
                vertical
                active={props.navigationState.index === 0}
                onPress={
                  () => 
                    props.navigation.navigate('Notifications')
                }>
                <Icon 
                  ios={iconClass('ios-notifications',0)}
                  android={iconClass('ios-notifications',0)}
                />
                <Text>Notification</Text>
              </Button>
              <Button
                transparent
                vertical
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate('People')}>
                <Icon  
                  ios={iconClass('ios-people',1)}
                  android={iconClass('ios-people',1)}  
                />
                <Text>People</Text>
              </Button>
            </FooterTab>
          </Footer>
        </StyleProvider>
      )
    }
  }
)

export const HomeStack = StackNavigator(
  {
    HomeTabs: {
      screen: HomeTabs
    }
  },{
    navigationOptions:{
      header: null
    }
  }
)