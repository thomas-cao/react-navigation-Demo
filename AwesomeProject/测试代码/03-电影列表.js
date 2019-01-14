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
    FlatList,
    Image


} from 'react-native';

// 定义请求常量
var  REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json"

export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
          data: [],
          loaded: false
      };
        // 先将this 绑定给自定义函数
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        //在调用方法
        this.fetchData();
    }

    // 请求网络数据
    fetchData(){
       fetch(REQUEST_URL)
           .then((response) => response.json())
           .then((responseData)=> {
               // 赋值数据
               this.setState({
                   data: this.state.data.concat(responseData.movies),
                   loaded: true
               })
           })
    }


    render(){
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
       // 创建flatList
        return (
            <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={{padding: 15, backgroundColor: '#f2f2ee'}}
            />
        )
    }

    // 创建空视图
    renderLoadingView() {
        return (
            <View style={{flex:1, backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>正在加载数据 请稍等...</Text>
            </View>
        )

    }

    // 创建显示视图
    renderMovie({item}){
        return (
            <View style={styles.container}>
                <Image style={{width: 45, height: 45, backgroundColor: 'red'}}></Image>

                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, color: 'yellow', textAlign: 'center'}}>{item.title}</Text>
                    <Text style={{fontSize:14, color: 'blue', textAlign: 'center'}}>{item.year}</Text>
                </View>
            </View>
        )
    }




}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    }

});

