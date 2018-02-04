import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            title: 'Home page'
        }
    },
    Detail_Screen: {
        screen: Detail,
        navigationOptions: {
            title: 'Detail page'
        },
    },
});
export const UserStack=StackNavigator({
    User_Screen: {
        screen: User,
        navigationOptions: {
            title: 'User page'
        },
    },
});

export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'HOME'
        }
    },
    User:{
        screen: UserStack,
        navigationOptions: {
            tabBarLabel: 'USER'
        }
    },

},
{
    taskBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: '#dddddd'
        },
        inactiveTintColor: 'green',
        activeTintColor: 'red',
        
    }
});



