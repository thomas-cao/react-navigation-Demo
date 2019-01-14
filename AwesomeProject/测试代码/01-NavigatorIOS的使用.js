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
    NavigatorIOS


} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

let screenW = Dimensions.get('window').width

class  NextView extends Component {


    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'blue', justifyContent:'center', alignItems: 'center'}}>
                <Text onPress={()=>{
                this.props.navigator.pop();
                }}>第二个页面</Text>
            </View>
        )
    }
}




class HomeView extends  Component {


    // 跳转页面
    _jumpToOther(){

        this.props.navigator.push(
            {
                component:NextView,
                title: "详情页面"
            }
        )

    }

    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'yellow', justifyContent:'center', alignItems: 'center'}}>

                <Text
                    onPress={this._jumpToOther.bind(this)}
                >
                    点击我
                </Text>
            </View>
        )
    }
}


export default class App extends Component {

    render(){
        return (
            <NavigatorIOS
                style={{flex:1, backgroundColor: 'red'}}
                initialRoute={{
                   component: HomeView,
                   title: '首页'

                   }}
            />

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center'
    }

});
