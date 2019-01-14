// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// In App.js in a new project import React from "react";

import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Platform } from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    StackNavigator,
    TabNavigator,
    TabBarBottom
}
    from "react-navigation";
import Home from './App/Home'
import Live from './App/Live'
import MyLife from './App/MyLife'
import Detail from './App/Detail'


const AppNavigator1 = createStackNavigator(
    {
    Home: Home,
    Det: Detail,
    My: MyLife
},
{
    defaultNavigationOptions: {
        headerTintColor: 'blue',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTitleStyle: {
            fontSize: 12
        }
    }
}

);
AppNavigator1.navigationOptions = ({navigation})=> {
        let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
    
      return {
        tabBarVisible,
      };
};

const AppNavigator2 = createStackNavigator(
    {
    Live: Live,
    Det: Detail
}
);

// 创建底部Tab key 为item的title  Home  , Des
const Tab = createBottomTabNavigator({
    Page1: {
        screen: AppNavigator1,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image 
                source = {focused? require('./image/one_selected.png') : require('./image/one.png')}
                style = {{width: 20, height: 20}}
                />
            ),
        }
    },
    Page2: {
        screen: AppNavigator2,
        navigationOptions: {
            tabBarLabel: '直播',
            tabBarIcon: ({tintColor, focused}) => (
                <Image 
                source = { focused? require('./image/two_selected.png'): require('./image/two.png')}
                style = {{width: 20, height: 20}}
                />
            ),
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'red' : '#fff',
    }
}
)


export default createAppContainer(Tab);
