import React from 'react'
import { Container, Content,Text, StyleProvider
} from 'native-base'
import AppHeader from '../AppHeader/AppHeader'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

export default class PeopleDetail extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <Text>detail of {navigation.state.params.id} </Text>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
PeopleDetail.navigationOptions = {
  header: <AppHeader title='Notifications Detail' isMenu={false} isBack={true} nameBack='NotificationList' />  
}