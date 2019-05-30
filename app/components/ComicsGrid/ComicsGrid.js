import React, { Component } from 'react';
import { FlatList, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

const ITEM_WIDTH = Dimensions.get('window').width;

class ComicsGrid extends Component {

    static propTypes = {
        data: array,
        getComicsByHeroId: func
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { getComicsByHeroId } = this.props;
        getComicsByHeroId(this.props.id);
        
    }
    renderItem = ({ item }) => {
        return (

            <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', { id: item.id, title: item.title })}>
                    <Image
                        style={{
                            width: (ITEM_WIDTH / 2 - 6),
                            height: 350,
                            margin: 3
                        }}
                        source={{ uri: item.image }}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const { data } = this.props;
        console.log(data)
        const { loading } = this.props;
        return (
            !loading ?
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}

                        renderItem={this.renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                    />
                </View> : <Text>Loading.....</Text>

        );
    }
}


function mapStateToProps(state, props) {
    return {
        data: state.dataReducer.data,
        loading: state.dataReducer.loading
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ComicsGrid);


