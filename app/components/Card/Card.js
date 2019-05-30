import React from 'react';
import { string, object } from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

const HeroCard = props => {
    const { description, img, title } = props;
    return (
        <View style={styles.container}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20 }}>{title}</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={{ fontSize: 10 }}>{description ? description : "Empty description....."}</Text>
                </View>
            </View>
        </View>
    );
};

HeroCard.propTypes = {
    description: string,
    img: object,
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
       
        flexDirection: 'column',
        height: '95%',
        padding: 5,
        width: '75%'
    },
    paragraph: {
        alignItems: 'flex-start',
      
        height: '60%',
        marginTop: 1,
        padding: 5
    },
    title: {
        alignItems: 'flex-start',
      
        height: '40%',

    }
});

export default HeroCard;
