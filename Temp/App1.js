/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // Basic

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text,View
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    console.log("Hello Construction");
  }
  componentWillMount(){
    console.log("Beginning of life cycle");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          hi
        </Text>
      </View>

    );

  }
  componentDidMount(){
    console.log("End of life cycle");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
