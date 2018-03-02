import React from 'react'
import { Container, 
  Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, 
  CardItem 
} from 'native-base'
import AppHeader from '../AppHeader/AppHeader'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <AppHeader
          title='HomeScreen'
          isMenu={true}
          isBack={false}
        />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Chat')}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
