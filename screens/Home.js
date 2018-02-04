import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component{
    // static navigationOptions={
    //     title: 'Home page'
    // }
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>
                <TouchableOpacity style={{backgroundColor:'green'}}
                    onPress={()=>{this.props.navigation.navigate('Detail_Screen', {parameter: 'Hello from Park ++'})}}
                >
                    <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}