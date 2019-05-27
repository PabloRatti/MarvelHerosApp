
import React, { Component } from 'react';
//import react in our code.

import SearchView from './SearchView';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput
} from 'react-native';

//import all the components we are going to use.

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { visibility: false, isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  textHandler(text) {
    this.setState({
      text: text,
    });
  }

  SearchFilterFunction = (text) => {

    //passing the inserted text in textinput
    const newData = this.arrayholder.filter((item) => {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      if (item.title) hasTitle = true;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    if (newData != -1) {
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: newData,
      });
    }






  }



  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  visibilityHandler() {
    let aux = this.state.visibility;
    this.setState({ visibility: !aux });
  }

  renderItem = ({ item }) => (

         <SearchView img={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                      description={item.title}/>
      
   
  )

  render() {

    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>

        <TextInput
          underlineColorAndroid='transparent'
          style={styles.textInputStyle}
          onChangeText={(text) => {
            this.textHandler(text)
            if (this.state.text.length > 2) this.SearchFilterFunction(text)
          }}
          value={this.state.text}
          placeholder="Search characters..."
        />


        {this.state.text.length > 2 ?

          <View style={styles.list}>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
            /></View> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    maxHeight: '30%',
    zIndex: 1,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {

    paddingLeft: 10,
    backgroundColor: '#575B5E',
  },
  list: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'lightgray',
  }
});