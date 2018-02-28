import React from 'react'
import { Container, 
  Header, Title, Left, Icon, Right, Button, Body, Content,Text, List,
  ListItem, Thumbnail
} from 'native-base'
const data = [1,2,3,4,5]

export default class NotificationList extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Notification List</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray={data}
            renderRow={data => {
              return (
                <ListItem>
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
    )
  }
}
