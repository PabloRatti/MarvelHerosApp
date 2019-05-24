import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from '../components/home/home' //Import the component file

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
        title='Check the categories'  
        onPress={() => navigation.dispatch({ type: 'Categories' })}  
    />
    <Home />
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default HomeScreen;