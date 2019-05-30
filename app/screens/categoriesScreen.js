import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, StyleSheet, Text, View } from 'react-native';
export default class CategoriesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'default');
        return (
            <View style={styles.container}>
                <Button
                    title="Back to Home"
                    onPress={() => navigation.dispatch({ type: 'Home' })}
                />
                <Text> {JSON.stringify(id)} </Text>
              
            </View>
        );
    }
}
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


