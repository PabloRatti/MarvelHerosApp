import React from 'react';
import { string } from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

const HeroCard = props => {
    const { description, img, title } = props;
    return (
        <View style={ styles.container }>
            <Image
                source={ img }
                style={ styles.image }
            />
            <View style={ styles.infoContainer }>
                <View style={ styles.title }>
                    <Text style={{ fontSize: 20 }}>{ title }</Text>
                </View>
                <View style={ styles.paragraph }>
                    <Text style={{ fontSize: 10 }}>{ description }</Text>
                </View>
            </View>
        </View>
    );
};

HeroCard.propTypes = {
    description: string,
    img: string,
    title: string
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-around',
        padding: 5
    },
    image: {
        alignSelf: 'center',
        height: '80%',
        padding: 5,
        width: '20%'
    },
    infoContainer: {
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'column',
        height: '95%',
        padding: 5,
        width: '75%'
    },
    paragraph: {
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 2,
        height: '60%',
        marginTop: 1,
        padding: 5
    },
    title: {
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        fontWeight: 'bold',
        height: '40%',
        width: '40%'
    }
});

export default HeroCard;
