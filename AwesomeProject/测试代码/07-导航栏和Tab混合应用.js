
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


// 创建底部Tab key 为item的title  Home  , Des
const Tab = createBottomTabNavigator({
    主页面: changeConfig(Home,'首页', require('./image/one.png'), require('./image/one_selected.png')),
    直播页: changeConfig(Live,'直播', require('./image/two.png'), require('./image/two_selected.png'))
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'red' : '#fff',
    }
}
)
// 抽取设置配置项方法
function changeConfig(screen, name, img, selecteImg){
   return {
        screen: screen,
        navigationOptions: {
            tabBarLabel: name,
            tabBarIcon: ({tintColor, focused}) => (
                <Image 
                source = {focused? selecteImg : img}
                style = {{width: 20, height: 20}}
                />
            ),
        }
    }
}

// 设置每个页面的顶部标题
Tab.navigationOptions = ({ navigation }) => {
    // {key}  从对象中根据某个key的名称取出值
    const { routeName  } = navigation.state.routes[navigation.state.index];
    let headerTitle = routeName;
    return {
        headerTitle,
    };
  };


  const AppNavigator1 = createStackNavigator(
    {
    page: Tab,
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
            fontSize: 18
        }
    }
}

);



export default createAppContainer(AppNavigator1);
