
import React, { Component } from 'react';
import { View, Text, Button, WebView } from "react-native";

export default class Detail extends Component {
    static navigationOptions = {
        title: '详情页',
        headerRight: (
            <Button title='收藏'
                onPress={() => {
                    alert('点击了收藏')
                }}
            ></Button>
        )
    };

    constructor(props) {
        super(props)
        // 定义属性
        this.state = {
            body: ''
        }
    }
    componentDidMount(){
       
         const newsID = this.props.navigation.getParam('newsID');
         console.log('----------------->>>>>>', newsID)
        // 请求详情页数据
        const url = 'http://c.3g.163.com/nc/article/' + newsID + '/full.html'
        fetch(url)
        .then((response) => response.json())
        .then((responeseData)=>{

            // 获取数据
            let body = responeseData[newsID].body;
             // 或者正文配图
             let imgs = responeseData[newsID].img;
             // 将图片替换到对应的位置
             imgs.forEach((img, i) => {
                 let ref = img.ref;
                 let src = img.src;
                 // 创建一个Imgae标签
                 let imgHtml = '<img src= "'+src+'" width=100%>'
                 // 替换占位
                 body = body.replace(ref, imgHtml)

             });
            // 更新页面
            this.setState({
                body: body
            })
          console.log('======>',responeseData)

        })
    }



    render() {

        return (
            <WebView style={{ flex: 1 }}
                source={{ html: this.state.body}}
            />

        )
    }
}