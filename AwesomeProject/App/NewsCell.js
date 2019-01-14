

import React, {Component} from 'react'
import Proptypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
}from 'react-native'

export default class NewsCell extends Component {

    // 现在这种方法 已经无效了，
    // static propTypes = {
    //     rowData: Proptypes.object
    // };
 
    render(){
        console.log('===========>',this.props.cellData.item.img)

        return(
            <TouchableOpacity style={styles.cellStyle} onPress = {()=>{
                console.log(this.props)
                this.props.navigation.push('Det', {newsID: this.props.cellData.item.id})
            }}>
                <Image style= {{width: 100, height: 60}} source={{uri: this.props.cellData.item.img}}/>
                <View style={styles.middleViewStyle}>
                    <Text style={{color: 'red', fontSize: 16}}>{this.props.cellData.item.title}</Text>
                    <Text>{this.props.cellData.item.digest}</Text>
                </View>
                <Text style={styles.textStyle}>{this.props.cellData.item.recomCount}跟帖</Text>
            </TouchableOpacity>
        )
    }
}

  // 定义属性接收外界传值
NewsCell.propTypes = {
    cellData: Proptypes.object
}
const styles = StyleSheet.create({
    cellStyle:{
        flexDirection:'row',
        padding:10,
    },
    middleViewStyle:{
        justifyContent:'space-between',
        flex:1,
        marginLeft:10
    },
    textStyle:{
        position:'absolute',
        bottom:10,
        right:10
    }
});