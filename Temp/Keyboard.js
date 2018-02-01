/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

        <View style={styles.row}>
              <View style={styles.column}>
                  <Text>Aaaaa</Text>
              </View>
              <View style={styles.column}>
                  <Text>Aaaaa</Text>
              </View>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>1</Text>
              <Text style={styles.text}>+</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>2</Text>
              <Text style={styles.text}>ABC</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>3</Text>
              <Text style={styles.text}>DEF</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>4</Text>
              <Text style={styles.text}>GHI</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.text}>JKL</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>6</Text>
              <Text style={styles.text}>MNO</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>7</Text>
              <Text style={styles.text}>PQRS</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>8</Text>
              <Text style={styles.text}>TUV</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.text}>WXYZ</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.column_grey}>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>0</Text>
            </View>
            <View style={styles.column_grey}>
            </View>
        </View>

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
  row: {
    flex:1,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderTopColor: 'black',
    flexDirection:'row',
  },
  column: {
    flex:1,
    borderRightWidth:1,
    borderTopColor: 'black',
    borderRightColor:'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  column_grey: {
    flex:1,
    borderRightWidth:1,
    borderTopColor: 'black',
    borderRightColor:'black',
    backgroundColor: 'grey',
  },
  number: {
    fontSize:40,
  },



});
