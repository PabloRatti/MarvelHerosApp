// Import the component file
import CharacterList from '../components/CharacterList/CharactersList';
import Home from '../components/home/home';
import MarvelHeader from '../components/MarvelHeader/MarvelHeader';
import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

import { Button, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>

        <MarvelHeader />
        <SearchBar navigation={navigation} />
        <CharacterList
            navigation={navigation}
        />
    </View>
);

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

HomeScreen.navigationOptions = {
    // title: 'HomeScreen',
    header: null
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flex: 1
    }
});

export default HomeScreen;
