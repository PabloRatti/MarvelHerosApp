import * as Actions from '../../actions';
import SearchView from '../SearchView/SearchView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { Component } from 'react';
import { array, func, object } from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    getSearchBarHeros: func,
    navigation: object,
    searchResultsHerosData: array
  }
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      visibility: false
    };
    this.arrayholder = [];
  }

  textHandler(text) {
    this.setState({
      text
    });
  }

  SearchFilterFunction = text => {
    const { getSearchBarHeros } = this.props;
    if (text.length > 1) {
      getSearchBarHeros(text);
    }
  }

  visibilityHandler() {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  render() {
    const { navigation, searchResultsHerosData } = this.props;
    const { text } = this.state;

    console.log(searchResultsHerosData);

    return (
      <View style={styles.viewStyle}>

        <TextInput
          placeholder={'Search characters...'}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          value={text}
          onChangeText={text => {
            this.textHandler(text);
            this.SearchFilterFunction(text);
          }}
        />

        {
          text.length >= 3 ?
            <View style={styles.list}>
              {searchResultsHerosData.length>0 ?
                <FlatList
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                  data={searchResultsHerosData}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ComicScreen', { id: item.id, title: item.name })}>
                      <SearchView
                        img={{ uri: item.image }}
                        key={item.id}
                        title={item.name} />
                    </TouchableOpacity>
                  )}
                />
                : <View style={{backgroundColor: '#DFEEEE'}}><Text>No results</Text></View>}
            </View> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#DFEEEE',
    borderColor: 'gray',
    borderWidth: 3
  },
  textInputStyle: {
    backgroundColor: '#212121',
    color: 'white',
    height: 45,
    paddingLeft: 10
  },
  textStyle: {
    padding: 10
  },
  viewStyle: {
    maxHeight: '30%',
    zIndex: 1
  }
});

function mapStateToProps(state) {
  return {
    loading: state.dataReducer.loading,
    searchResultsHerosData: state.dataReducer.searchResultsHerosData
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);