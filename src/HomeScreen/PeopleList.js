import React from 'react'
import { Container, Left, Body, Content,Text, List,
  ListItem, Thumbnail, StyleProvider
} from 'native-base'
import {StackNavigator} from 'react-navigation'
import AppHeader from '../AppHeader/AppHeader'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'
import PeopleDetail from '../Notification/NotificationDetail'
const data = [1,2,3,4,5]
const uriImage = 'https://user-images.githubusercontent.com/5037791/36775543-15af3a1a-1c95-11e8-8a6e-9223e58c5247.png'

export class PeopleList extends React.Component {

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
                    onPress={()=>
                      navigation.navigate('PeopleDetail', {id: data})
                    }
                  >
                    <Left>
                      <Thumbnail small source={{ uri: uriImage}} />
                    </Left>
                    <Body>
                      <Text>People - {data}</Text>
                      <Text note> Title</Text>
                    </Body>
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
PeopleList.navigationOptions = {
  header: <AppHeader title='People' isMenu={true} isBack={false} />  
}
export const PeopleListStack = StackNavigator(
  {
    NotificationList: {
      screen: PeopleList,
      path: 'notification/:id',
    },
    PeopleDetail:{
      screen: PeopleDetail,
      path: 'people/:id',
    }
  },
  {
  }
)