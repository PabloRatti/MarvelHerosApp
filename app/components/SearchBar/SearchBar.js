
import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import SearchView from '../SearchView/SearchView';
import { bindActionCreators } from 'redux';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  TextInput
} from 'react-native';

//import all the components we are going to use.

class SearchBar extends Component {
  static propTypes = {
    initialHerosData: array,
    getHeros: func
  }
  constructor(props) {
    super(props);
    //setting default state
    this.state = { visibility: false, isLoading: true, text: '' };
    this.arrayholder = [];
  }

  textHandler(text) {
    this.setState({
      text: text,
    });
  }

  componentDidMount() {
    const { getHeros } = this.props;
    getHeros(50);
  }

  SearchFilterFunction = (text) => {
    const {  initialHerosData } = this.props;
    const arrayholder = [... initialHerosData];
    //passing the inserted text in textinput
    const newData = arrayholder.filter((item) => {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      if (item.name) hasTitle = true;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
    });

  }

  visibilityHandler() {
    let aux = this.state.visibility;
    this.setState({ visibility: !aux });
  }


  render() {
    const { data } = this.props;
    const { loading } = this.props;
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>

        <TextInput
          underlineColorAndroid='transparent'
          style={styles.textInputStyle}
          onChangeText={(text) => {
            this.textHandler(text)
           
              this.SearchFilterFunction(text)
          }}
          value={this.state.text}
          placeholder={"Search characters..."}
        />


        {this.state.text.length > 2 ?
          <View style={styles.list}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={ item => item.id.toString() }
              ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ComicScreen',{id: item.id, title: item.name})  }>
                  <SearchView
                    key={item.id}
                    onPress={() => navigation.dispatch({ type: 'ComicScreen' })}
                    img={{ uri: item.image }}
                    title={item.name} />
                </TouchableOpacity>
              )}
       
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

  }
});

function mapStateToProps(state, props) {
  return {
    initialHerosData: state.dataReducer.initialHerosData,
    loading: state.dataReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
