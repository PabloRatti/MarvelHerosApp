import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

import HeaderMarvel from '../components/HeaderMarvel/HeaderMarvel';
import DescriptionHeader from '../components/DescriptionHeader/DescriptionHeader'; 
import FullDescription from '../components/FullDescription/FullDescription'; 

const DetailScreen = ({}) => (
    <View style={ styles.container }>
        <HeaderMarvel/>
        <DescriptionHeader/> 
        <FullDescription/>    
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info:{
        
    },
    title:{

    }
    
});

DetailScreen.navigationOptions = { header: null };

export default DetailScreen;
