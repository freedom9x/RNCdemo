import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { Button, Text, Icon, Footer, FooterTab } from 'native-base'
import NotificationList from './NotificationList'
import PeopleList from './PeopleList'
const HomeTabs = TabNavigator(
  {
    NotificationList: { screen: NotificationList },
    PeopleList: {screen: PeopleList}
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('NotificationList')}>
              <Icon name="bowtie" />
              <Text>Notification</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('PeopleList')}>
              <Icon name="briefcase" />
              <Text>People</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
  }
)

export default HomeTabs