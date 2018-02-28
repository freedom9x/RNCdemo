import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input,Button,
  Icon, Text
} from 'native-base'
import {View} from 'react-native'
import {styles} from './styles/app'
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.loginTitleContainer}>
            <Text style={styles.loginTitle}>LOGIN </Text>
          </View>
          <Form style={styles.loginForm}>
            <Item>
              <Icon active name='person' />
              <Input placeholder='Username'/>
            </Item>
            <Item>
              <Icon active name='key' />
              <Input placeholder='Password'/>
            </Item>
            <View style={styles.buttonContainer}>
              <Button primary
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
          
        </Content>
      </Container>
    )
  }
}