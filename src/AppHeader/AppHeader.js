
import React from 'react'
import { Header, Left, Button, Icon, Body, Title, Right} from 'native-base'
import { withNavigation } from 'react-navigation'
import {Platform, StatusBar, StyleSheet} from 'react-native'

class AppHeader extends React.Component {

  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
  }

  goBack(){
    const {nameBack} = this.props
    if(nameBack){
      this.props.navigation.navigate(nameBack)
    }else{
      this.props.navigation.goBack()
    }
    
  }

  openDrawer(){
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    const {title, isBack, isMenu} = this.props
    return (
      <Header style={styles.marginAndroid} androidStatusBarColor="blue">
        <Left>
          {
            isBack?
              <Button transparent onPress={this.goBack}>
                <Icon name="arrow-back" />
              </Button>: 
              null
            
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {
            isMenu?
              <Button transparent onPress={this.openDrawer}>
                <Icon name="menu" />
              </Button>:
              null
          }
        </Right> 
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  marginAndroid: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
})

export default withNavigation(AppHeader)