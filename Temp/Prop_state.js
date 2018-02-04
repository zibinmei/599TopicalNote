import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.welcome}>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>

        <View style={{transform: [{translate: [0, 0, -3]}]}}>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
      </View>
    );
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Greeting name='Carlin' />
          <Greeting name='Nathan' />
          <Greeting name='Andrew' />
          <Greeting name='Jay' />
        </View>

        <View style={styles.welcome}>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>

      </View>
    );
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
});