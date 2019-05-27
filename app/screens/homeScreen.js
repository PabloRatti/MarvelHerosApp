// Import the component file
import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
const HomeScreen = ({ navigation }) => (
    <View style={ styles.container }>
        <Button
            title="Boton"
            onPress={ () => navigation.dispatch({ type: 'Categories' }) }
        />
    </View>
);

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

HomeScreen.navigationOptions = {
    title: 'Home'
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF44',
        flex: 1
    }
});

export default HomeScreen;
