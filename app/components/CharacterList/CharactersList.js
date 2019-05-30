import * as Actions from '../../actions';
import HeroCard from '../Card/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { array, func } from 'prop-types';

class CharacterList extends Component {

    static propTypes = {
        initialHerosData: array,
        getHeros: func
    }

    constructor(props) {
        super(props);
        this.state = {
            indexGeter: 0
        };
    }

    componentDidMount() {
        const { getHeros } = this.props;
        getHeros(100);
    }

    render() {
        const { initialHerosData, loading, navigation, getHeros } = this.props;

        return (
            !loading ?
                <View style={{ flex: 1 }}>
                    <FlatList
                        onEndReached={() => {
                            this.setState({ indexGeter: this.state.indexGeter + 100 });
                            getHeros(100, this.state.indexGeter)
                        }

                        }
                        data={initialHerosData}
                        enableEmptySections={true}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ComicScreen', { id: item.id, title: item.name })
                            }>
                                <HeroCard
                                    key={item.id}
                                    description={item.description}
                                    img={{ uri: item.image }}
                                    title={item.name}
                                    value={item.id}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
                : <Text> loading data.... </Text>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        initialHerosData: state.dataReducer.initialHerosData,
        loading: state.dataReducer.loading
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);


