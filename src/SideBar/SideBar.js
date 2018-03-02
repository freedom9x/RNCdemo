import React from 'react'
import {SafeAreaView } from 'react-native'
import { Container, Content, Text, List, ListItem, View } from 'native-base'
const routes = ['Home', 'Profile', 'Logout']
import {styles} from '../styles/app'
export default class SideBar extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Container style={styles.marginAndroid}>
          <Content contentContainerStyle={{flex: 1}}>
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data)}>
                    <Text>{data}</Text>
                  </ListItem>
                )
              }}
            />
            <View style={{
              flex: 1, 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              alignSelf: 'stretch'
            }}>
              <Text>
           hienpham2991@gmail.com
              </Text>
            </View>
          </Content>
        </Container>
      </SafeAreaView>
    )
  }
}