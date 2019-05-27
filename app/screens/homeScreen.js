// Import the component file
import Home from '../components/home/home';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={ styles.container }>
        <Button
            title="Check the categories"
            onPress={ () => navigation.dispatch({ type: 'Categories' }) }
        />
        <Home />
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
