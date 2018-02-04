import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet, ListView } from 'react-native';

var DATA =[
    {name:"Carlin", occupation:"Janitor"},
    {name:"Nathan", occupation:"Slave"},
    {name:"Andrew", occupation:"Teacher"},
    {name:"Jay", occupation:"Doctor"},
    
];
export default class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA),
    };
  }

  MakeRow(property){
      return(
        <View style={styles.container}>
            <Text style={{color:'red',fontSize: 20}}> {property.name} </Text>
            <Text style={{fontSize: 20}}> {property.occupation} </Text>
        </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.MakeRow}
        />
      </View>
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