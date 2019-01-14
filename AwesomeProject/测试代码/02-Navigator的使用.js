/**
 * Created by sunjinshuai on 2018/12/29.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,



} from 'react-native';


// 导入第三方 Navigator
import {Navigator} from 'react-native-deprecated-custom-components'

// 下一页
class  NextPage extends Component {

    render(){
        // console.log(this.props);
        return(
            <View style={{flex: 1, backgroundColor:'blue', justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.props.showText}</Text>
            </View>
        )
    }
}



// 首页
class  HomeView extends  Component {

    _pushNextPage(){

        // 跳转页面
        // 创建路由对象
        var route = {
            component: NextPage,
            passProps: {
                showText: "这是首页传递的值"
            }
        }
        this.props.navigator.push(route)

    }


    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={this._pushNextPage.bind(this)}>点击我吧</Text>
            </View>
        )
    }
}


// initialRoute 配置页面
//  configureScene 配置跳转方式


export default class App extends Component {

    _configureScene(route, routeStack){
        //  PushFromRight 从右到左
        // FloatFromRight 有点类似于 第一级页面逐渐缩小的动画
        // FloatFromBottom 从底部弹出

        return Navigator.SceneConfigs.FloatFromRight
    }
    // 负责组件直接的数据传递 系统会传递过来两个参数
    // route 负责路由关系
    // navigator

    _renderScene(route, navigat){
        // {...route.passProps} 将route 中passProps 中所有的值传递出去
        return(<route.component navigator={navigat} {...route.passProps}/>)
    }

    render(){
        return (

            <Navigator
                initialRoute={{component: HomeView}}
                configureScene={this._configureScene.bind(this)}
                renderScene={this._renderScene.bind(this)}

            />

        )
    }

}

