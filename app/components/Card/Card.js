import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';



export default HeroCard = (props) => {
    
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={props.img}
            />

            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <Text style={{fontFamily: 'Cochin',fontSize: 20}}>{props.title}</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={{fontSize: 10}}>{props.description}</Text>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around'


    },
    infoContainer: {
        padding: 5,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 1,
        height: '95%',
        width: '75%',
        
    },
    title: {
        alignItems:'flex-start',        
        fontWeight: 'bold',
        width: '40%',
        height: '40%',
        borderColor: 'black',
        borderWidth: 1,

    },
    image: {
        alignSelf: 'center',
        padding: 5,
        width: '20%',
        height: '80%',

    },
    paragraph: {
        padding: 5,
        marginTop: 1,
        alignItems:'flex-start',
        fontSize: 2,
       
        height: '60%',        
        borderColor: 'black',
        borderWidth: 1,

    },



});