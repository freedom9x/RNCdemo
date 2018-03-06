import {Platform, StatusBar, StyleSheet} from 'react-native'
export  const contactStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  content:{
    flex: 2,
    alignSelf: 'stretch'
  },
  imgContainer:{
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  },
  btnsContainer:{
    flexDirection:'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 15
  },
  iconBtn:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBtnText:{
    color: '#2874F0', 
    fontSize: 12
  },
  iconBtnIcon:{
    color: '#2874F0',
    fontSize: 22
  },
  contentBody:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
