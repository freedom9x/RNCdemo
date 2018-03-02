import React from 'react'
import { Container, Card, CardItem, 
  Content, Right, Icon, Text } from 'native-base'
import AppHeader from '../AppHeader/AppHeader'

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
Profile.navigationOptions = {
  header: <AppHeader title='Profile' isMenu={true} isBack={false} />  
}