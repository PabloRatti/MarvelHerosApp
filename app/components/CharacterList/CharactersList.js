import * as Actions from '../../actions';
import HeroCard from '../Card/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import React, { Component } from 'react';
import { array, func } from 'prop-types';

class CharacterList extends Component {
    
    static propTypes = {
        data: array,
        getHeros: func
    }
    constructor (props) {
        super(props);
        this.state = {
        };
        this.arrayholder = [];
    }

    componentDidMount () {
        const { getHeros } = this.props;
        getHeros(50);
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
        const { data } = this.props;
        const { loading } = this.props;
        return (
            !loading ?
                <View style={{ flex: 1 }}>
                    <FlatList
                        ItemSeparatorComponent={ this.ListViewItemSeparator }
                        data={ data }
                        enableEmptySections={ true }
                        keyExtractor={ index => index }
                        renderItem={ ({ item }) => (
                            <HeroCard
                                description={ item.description }
                                img={{ uri: item.image }}
                                title={ item.name }
                            />
                        ) }
                    />
                </View>
                : <Text> loading data </Text>
        );
    }
}

/**
 * The function takes data from the app current state,
 * and insert/links it into the props of our component.
 * This function makes Redux know that this component needs to be passed a piece of the state
 */
function mapStateToProps (state, props) {
    return {
        data: state.dataReducer.data,
        loading: state.dataReducer.loading
    };
}
/**
 * Doing this merges our actions into the component’s props,
 * while wrapping them in dispatch() so that they immediately dispatch an Action.
 * Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
 */

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);

// export default CharacterList;
