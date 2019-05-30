import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default class DescriptionHeader extends Component {
    constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick(){
        this.props.navigation.goBack(null);
        return true;
        }
    

    render() {
        return (
            <View style={{height: '12%',backgroundColor:'#212121',flexDirection: 'row'}}>
                <View style={{width:'15%', height:'100%'}}>
                    <TouchableOpacity onPress={this.handleBackButtonClick} style={{marginLeft: '3%',marginTop:'auto',marginBottom:'auto'}}>
                        <Icons name={"ios-arrow-dropleft"} size={40} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={{width:'80%',justifyContent : 'space-evenly'}}>
                    <Text style={{fontSize: 20,marginLeft:'auto',marginRight:'auto',color:'#fff'}}>{this.props.title}</Text>
                    <Text style={{fontSize: 15,marginLeft:'auto',marginRight:'auto',color:'#fff'}}>{this.props.subtitle}</Text>         
                </View>
            </View>
        )
    }
}