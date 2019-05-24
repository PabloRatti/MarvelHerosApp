import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

const CategoriesScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Button
        title='Back to Home'  
        onPress={() => navigation.dispatch({ type: 'Home' })}  
      />
      <Text> Categories Screen </Text>
    </View>
);

CategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

CategoriesScreen.navigationOptions = {
  title: 'Categories',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

export default CategoriesScreen;