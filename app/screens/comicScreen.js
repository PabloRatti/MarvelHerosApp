import React from 'react';
import { StyleSheet,View,Button} from 'react-native';
import PropTypes from 'prop-types';
import Home from '../components/home/home' //Import the component file
import ComicsGrid from '../components/ComicsGrid/ComicsGrid'
import HeaderMarvel from '../components/HeaderMarvel/HeaderMarvel'
import DescriptionHeader from '../components/DescriptionHeader/DescriptionHeader'

const ComicScreen = ({ navigation }) => (
  
  <View style={styles.container}>
    <HeaderMarvel/>  
    <DescriptionHeader navigation={navigation}/>    
    <ComicsGrid />    
    </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

ComicScreen.navigationOptions =  { title: 'ComicScreen', header: null};

export default ComicScreen;