import { StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';


export default SearchView = (props) => {
    return (

        <View style={styles.viewStyle}>
            <Image
                style={styles.image}
                source={props.img}
            />
            <View style={styles.description}>
                <Text fontFamily="Verdana" style={{padding: 5}}>{props.title}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        maxHeight: 60,
        height: 60
    },
    description: {
        borderColor: 'black',
        alignSelf: 'center',
        borderWidth: 0.5,
        flex:1,
        padding: 5,         
        marginLeft: '5%',
        
    },
    image: {
        alignSelf: 'center',
        padding: 5,
        width: '20%',
        height: '80%',
    }

});