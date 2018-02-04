import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet, ListView } from 'react-native';
import { Tabbar } from './Router';

export default class App extends Component {



  render() {
    return (
        <Tabbar />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',

  },

});
