// Import the component file
import Home from '../components/home/home';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MarvelHeader from '../components/MarvelHeader/MarvelHeader';
import SearchBar from '../components/MarvelHeader/SearchBar';
import MarvelHeader from '../components/MarvelHeader/MarvelHeader';
import CharacterList from '../components/CharacterList/CharactersList';
const HomeScreen = ({ navigation }) => (
    <View style={ styles.container }>
       <Button 
                title="Boton"
                onPress={() => navigation.dispatch({type: 'Categories'})} />
       
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
