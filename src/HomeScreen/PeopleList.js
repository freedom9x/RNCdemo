import React from 'react'
import { Container, 
  Header, Title, Left, Icon, Right, Button, Body, Content,Text, List,
  ListItem, Thumbnail
} from 'native-base'
const data = [1,2,3,4,5]
export default class PeopleList extends React.Component {
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
            <Title>People List</Title>
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
                    <Text>People - {data}</Text>
                  </Body>
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}
