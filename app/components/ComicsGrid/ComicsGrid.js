import React, { Component } from 'react';
import {FlatList,View,Image,Dimensions, Text, TouchableOpacity} from 'react-native';
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
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount () {
        const { getComicsByHeroId } = this.props;
        getComicsByHeroId(1009610);
        //console.log(getComicsByHeroId(1009610))
    }
    renderItem = ({item}) => {
        return(    
            <View >    
               <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Detail',{id: item.id, title: item.title} )}>
                    <Image    
                        style={{ 
                        width: (ITEM_WIDTH/2 - 6),
                        height:350,
                        margin: 3
                        }}
                        source={{uri: item.image}}
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
            <View style ={{flex: 1}}>                
                <FlatList                 
                data = {data}                
                renderItem={this.renderItem}
                numColumns={2}
                keyExtractor = {index => index}
                />
            </View>
            : <Text> Loading comics...</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(ComicsGrid);

// export default CharacterList;
