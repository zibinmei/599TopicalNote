import React, { Component } from 'react'
import {
  AppRegistry, Platform, StyleSheet, Text,View
} from 'react-native'

//import { StackNavigator } from 'react-navigation'

import ColorButton from './components/ColorButton'
//import ColorInfo from './components/ColorInfo'

/*const App = StackNavigator({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo }
})
*/
export default class App extends Component<{}> {
  render() {
    return (
      <ColorButton style={styles.container}/>
      <View style={styles.container}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: "green",
  },
});
AppRegistry.registerComponent('ColorList', () => App)