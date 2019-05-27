
import React, { Component } from 'react';
import HeroCard from '../Card/Card';
import {  
    View,
    FlatList,
   
} from 'react-native';
//import all the components we are going to use.

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        //setting default state
        this.state = { isLoading: true, text: '' };
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


    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: newData,
            text: text,
        });
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


    render() {

        return (
            //ListView to show with textinput used as search bar
           
                <View style={{flex:1}}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item }) => (
                        <HeroCard img={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                            description="Description paragraph here, short description pls...."
                            title={item.title} /> 
                    )}
                    enableEmptySections={true}                   
                    keyExtractor={(item, index) => index}
                />

           </View>

        );
    }
}
