import {Platform, StatusBar, StyleSheet} from 'react-native'
export  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loginForm:{
    width: '60%',
    alignItems: 'center',
    flex: 3
  },
  buttonContainer:{
    marginTop: 40
  },
  loginTitleContainer:{
    flex: 2,
    justifyContent: 'center',
   
  },
  loginTitle:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  marginAndroid: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })

  }
})
