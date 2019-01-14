
import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const screenW = Dimensions.get('window').width

import Swiper from 'react-native-swiper'

export default class NewsHeaderBanner extends Component {

    // 创建子控件
    _renderHeaderView() {

        // 获取数据
        var ads = this.props.headerData;
        // 创建子控件数组
        var views = [];
        ads.forEach((ad, i) => {
            console.log('12122222--->', ad)
            views.push(
                <View style={{ width: screenW}}
                    key={i}
                >
                    <Image resizeMode='stretch' style={{ width: screenW, height: 230 }} source={{ uri: 'http://cms-bucket.ws.126.net/2019/01/13/4d7da2384f8c40a0a55fbbe938c39508.jpeg'}} />
                    <Text style={{position: 'absolute', bottom: 0, color: 'white'}}>{ad.title}</Text>
                </View>
            )
        });

      return views;
    }


    render() {
        return (
            <Swiper style={{ height: 230, backgroundColor: 'red' }}
                onMomentumScrollEnd={(e, state, contex) => console.log('index:', state.index)}
                dot={
                    <View style={styles.dotStyle} />
                }
                activeDot={<View style={styles.activeDotStyle} />}
                paginationStyle={{ bottom: -23, left: null, right: 10 }}
                loop
            >

                {/* 添加子控件 */}
                {this._renderHeaderView()}
            </Swiper>
        )
    }
}

// 定义属性接收外界传值
NewsHeaderBanner.propTypes = {
    headerData: Proptypes.array
}


const styles = StyleSheet.create({

    dotStyle: {
        backgroundColor: 'rgba(0,0,0,2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 3

    },
    activeDotStyle: {
        backgroundColor: 'red',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 3
    }

});