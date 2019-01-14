import React, { Component } from 'react';
import { View, Text } from "react-native";

export default class Live extends Component {

    render() {
        return(
            <View style= {{flex: 1, backgroundColor: 'yellow'}}>
            <Text onPress={()=>{
                this.props.navigation.push('Det')
            }}>直播页面</Text>
            </View>
        )
    }
}