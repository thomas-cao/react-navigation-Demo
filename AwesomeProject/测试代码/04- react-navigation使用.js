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

/**
 *  this.props.navigation.navigate('Details') 相同的页面不会重复进入
 *   this.props.navigation.push('Details')  每次调用 ` push ` 时, 我们会向导航堆栈中添加新路由。
 */

class HomeScreen extends React.Component {
    // 这些设置只在当前页面有作用
    // 设置导航栏标题
     static navigationOptions = {
         title: "Home",
        //  // 设置导航栏样式
        //  headerStyle: {
        //      backgroundColor: 'red'
        //  },
        //  headerTintColor: 'yellow',
        //  headerTitleStyle: {
        //      fontSize: 12
        //  }
        // 设置右边按钮
        headerRight: (
            <Text onPress= {()=>{
                alert('点击了右边')
            }}>
            右边</Text>
        )
     }

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

  // 获取传递过来的参数 设置标题
  static navigationOptions = ({navigation}) => {
    return {
        title : navigation.getParam('other')
    }
  };

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
})

export default createAppContainer(Tab);

