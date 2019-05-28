'use strict';
//Import your actions
import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import { array, bool, func } from 'prop-types';

class Home extends Component {
    
    static propTypes = {
        data: array,
        getComicInfo: func,
        getHeros: func,
        loading: bool
    }
    constructor (props) {
        super(props);
        this.state = {
        };
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount () {
        //Call our action
        const { getHeros, getComicInfo } = this.props;
        // getComicInfo(2);
        getHeros();
    }

    renderItem ({ item, index }) {
        const imageSrc = item.thumbnail.path + '.' + item.thumbnail.extension;
        console.log(imageSrc);
        
        return (
            <View style={ styles.row }>
                <Text style={ styles.title }>
                    {(parseInt(index) + 1)}{'. '}{item.name}
                </Text>
                <Text style={ styles.description }>
                    {item.name}
                </Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', flexDirection: 'row' }}>
                    <Image
                        source={{ uri: imageSrc }}
                        style={{ height: 58, width: 66 }}
                    />
                    <Text style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        paddingLeft: 10
                    }}>
                        { item.description }
                    </Text>
                </View>
                
            </View>
        );
    }

    render () {
        const { data, loading } = this.props;
        if (loading) {
            return (
                <View style={ styles.activityIndicatorContainer }>
                    <ActivityIndicator animating={ true } />
                </View>
            );
        } else {
            return (
                <View style={{ backgroundColor: '#F5F5F5', flex: 1, paddingTop: 20 }}>
                    <FlatList
                        data={ data }
                        keyExtractor={ (item, index) => index.toString() }
                        ref="listRef"
                        renderItem={ this.renderItem }
                    />
                </View>
            );
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center'
    },

    description: {
        fontSize: 14,
        marginTop: 5
    },

    row: {
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: '600'
    }
});
