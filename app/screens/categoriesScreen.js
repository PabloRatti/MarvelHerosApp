import PropTypes from 'prop-types';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = ({ navigation }) => (
    <View style={ styles.container }>
        <Button
            title="Back to Home"
            onPress={ () => navigation.dispatch({ type: 'Home' }) }
        />
        <Button
            title="Back to Home"
            onPress={ () => navigation.dispatch({ type: 'Comic' }) }
        />
        <Text> Categories Screen </Text>
    </View>
);

CategoriesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

CategoriesScreen.navigationOptions = {
    title: 'Categories'
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        flex: 1
    }
});

export default CategoriesScreen;
