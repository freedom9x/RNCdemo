import React from 'react'
import { Container, Content,Text, StyleProvider
} from 'native-base'
import AppHeader from '../AppHeader/AppHeader'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

export default class NotificationDetail extends React.Component {

  render() {
    const {navigation} = this.props
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <Text>detail of  {navigation.state.params.id}</Text>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
NotificationDetail.navigationOptions = ({navigation})=>({
  header: <AppHeader title={`${navigation.state.params.id}`} 
    isMenu={true} isBack={true} 
    nameBack='NotificationList' 
  />  
})