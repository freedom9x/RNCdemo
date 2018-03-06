import React from 'react'
import { 
  Container, Content,Text, StyleProvider, Thumbnail, View
} from 'native-base'
import AppHeader from '../AppHeader/AppHeader'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'
const uriImage = 'https://user-images.githubusercontent.com/5037791/36775543-15af3a1a-1c95-11e8-8a6e-9223e58c5247.png'
import {contactStyle} from '../styles/contact'
import{
  Button, Icon
} from 'native-base'
export default class PeopleDetail extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content contentContainerStyle={contactStyle.container}>
            <View style={contactStyle.imgContainer}>
              <Thumbnail 
                large
                source={{uri: uriImage}}
              />
            </View>
            <View style={contactStyle.content}>
              <View style={contactStyle.btnsContainer}>
                <View style={contactStyle.iconBtn}>
                  <Icon name='ios-call'style={contactStyle.iconBtnIcon}/>
                  <Text style={contactStyle.iconBtnText}>Call</Text>
                </View>
                <View style={contactStyle.iconBtn}>
                  <Icon name='ios-text' style={contactStyle.iconBtnIcon}/>
                  <Text style={contactStyle.iconBtnText}>Message</Text>
                </View>  
                <View style={contactStyle.iconBtn}>
                  <Icon name='ios-mail' style={contactStyle.iconBtnIcon}/>
                  <Text style={contactStyle.iconBtnText}>Email</Text>
                </View>      
              </View>
              <View style={contactStyle.contentBody}>
                <Text>user infomation</Text>
              </View>
              
            </View>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
PeopleDetail.navigationOptions = {
  header: <AppHeader title='Notifications Detail' isMenu={false} isBack={true} nameBack='NotificationList' />  
}