// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// In App.js in a new project import React from "react";

import React, { Component } from 'react';
import { View, Text } from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
}
    from "react-navigation";

class HomeScreen extends React.Component {

    render() {
        return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text onPress = {()=>{
                this.props.navigation.push('Details',
                {
                    itemID: 88,
                    other: '这时段文字'
                })
            }}>Home Screen</Text>
            
        </View>);
    }
}


class DetailsScreen extends React.Component {


    render() {
       // 获取上个页面 传递过来的参数
       const {navigation} = this.props
       // 传过来的是json 格式
       const other = navigation.getParam('other')

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text onPress={()=>{
                    this.props.navigation.push('Details')
                }}>
                    {other}
                 </Text>
                <Text onPress= {()=>{
                this.props.navigation.goBack()
            }}>点击返回</Text>
            </View>
        );
    }
}
// 设置页面配置
/**
 *  key是路由名称
 * value是该路由的配置
 */
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
},
{
    // 设置初始化默认第一个页面
initialRouteName: 'Home',  
// 配置全局的导航栏样式
defaultNavigationOptions: {
   // 设置导航栏样式
   headerStyle: {
    backgroundColor: 'red'
},
headerTintColor: 'yellow',
headerTitleStyle: {
    fontSize: 12
}
}

}
);
// 第二个导航
const Navigator1 = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
},
{
initialRouteName: 'Details'  // 设置初始化默认第一个页面
}
);


// 创建底部Tab key 为item的title  Home  , Des
const Tab = createBottomTabNavigator({
    Home: AppNavigator,
    Des: Navigator1
},
{
 // 设置tabitem样式
tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
} 
    
})

export default createAppContainer(Tab);

