import HeroCard from '../Card/Card';
import { FlatList, View } from 'react-native';
import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = { isLoading: true, text: '' };
        this.arrayholder = [];
    }

    componentDidMount () {
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

    SearchFilterFunction (text) {
        // Passing the inserted text in textinput
        const newData = this.arrayholder.filter(function (item) {
            // Applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            /**
             * Getting the filtered newData on datasource
             * After setting the data it will automatically re-render the view
             */
            dataSource: newData,
            text: text
        });
    }

    ListViewItemSeparator = () => {
        //Item sparator view
        return (
            <View
                style={{
                    backgroundColor: '#080808',
                    height: 0.3,
                    width: '90%'
                }}
            />
        );
    };

    render () {
        const { dataSource } = this.props;
        return (
            //ListView to show with textinput used as search bar
            <View style={{ flex: 1 }}>
                <FlatList
                    ItemSeparatorComponent={ this.ListViewItemSeparator }
                    data={ dataSource }
                    enableEmptySections={ true }
                    keyExtractor={ (item, index) => index }
                    renderItem={ ({ item }) => (
                        <HeroCard
                            description="Description paragraph here, short description pls..."
                            img={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                            title={ item.title }
                        />
                    ) }
                />
            </View>
        );
    }
}
