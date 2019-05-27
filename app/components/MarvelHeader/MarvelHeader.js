import React, { Component } from 'react';
import {Image,View} from 'react-native';
export default class HeaderMarvel extends Component {
    render() {
        return (
            <View style={{height: '25%'}}>
                <Image source={require('./MarvelHeader.jpg')} style={{width: '100%',height: '100%'}}/>
            </View>
        )
    }
}
