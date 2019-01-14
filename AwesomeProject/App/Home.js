import React, { Component } from 'react';
import { View, Text, Button, FlatList } from "react-native";
import NewsCell from './NewsCell'
import NewsHeaderBanner from './NewsHeadBanner'

// 设置新闻列表页面

// 请求路径
const NewsUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore';


export default class Home extends React.Component {
    // 这里设置只会作用于当前这个页面
    static navigationOptions = {
        title: '国家大事',
        headerStyle: {
            backgroundColor: '#ccc',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Button title='添加'
                onPress={() => {
                    alert('点击了添加')
                }}
            ></Button>
        )
    }
    // init
    constructor(props) {
        super(props)

        this.state = {
            dataSource: [],
            headerData: [],
        }
    }

    componentDidMount() {

        // 发起网络请求
        fetch(NewsUrl).then((response) => response.json())
            .then((responeseData) => {
                var header = [];
                var cells = [];
                console.log('----------->',responeseData)
                // 解析数据
                var jsonArr = responeseData['T1348647853363'];
                jsonArr.forEach((value, index) => {
                    if (index == 0) {
                        header = value.ads;
                    } else {
                        cells.push(value)
                    }
                });
                this.setState({
                    dataSource: cells,
                    headerData: header
                })

    console.log('00000000000->', header);

            })


    }
    _renderItem(rowDate, sectionID, rowId, hightlightRow) {
        return (
            <NewsCell cellData={rowDate} {...this.props}/>
        )
    }
    _ListHeaderComponent(){
        return (
            <NewsHeaderBanner headerData= {this.state.headerData}/>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={this._renderItem.bind(this)}
                 ListHeaderComponent= {this._ListHeaderComponent.bind(this)}

            >
            </FlatList>
        )
    }
}