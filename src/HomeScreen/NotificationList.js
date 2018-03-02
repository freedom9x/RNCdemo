import React from 'react'
import { Container, Left, Right, Body, Content,Text, List,
  ListItem, Thumbnail, StyleProvider
} from 'native-base'
import AppHeader from '../AppHeader/AppHeader'
const data = [1,2,3,4,5]
const uriImage = 'https://user-images.githubusercontent.com/5037791/36775545-1761c8fa-1c95-11e8-8e06-8daed89a315e.png'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'
import {StackNavigator} from 'react-navigation'
import NotificationDetail from '../Notification/NotificationDetail'
export class NotificationList extends React.Component {

  constructor(){
    super()
  }

  render() {
    const {navigation} = this.props
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <List
              dataArray={data}
              renderRow={data => {
                return (
                  <ListItem avatar
                    onPress={()=>navigation.navigate('NotificationDetail', {id: data})}
                  >
                    <Left>
                      <Thumbnail source={{ uri: uriImage }} />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik - {data}</Text>
                      <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem>
                )
              }}
            />
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

export  const NotificationListStack = StackNavigator(
  {
    NotificationList: {
      screen: NotificationList,
      navigationOptions:{
        header: <AppHeader title='Notifications' isMenu={true} isBack={false} />  
      }
    },
    NotificationDetail:{
      screen: NotificationDetail
    }
  },
  {

  }
)