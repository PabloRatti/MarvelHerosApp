import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';

import {object , func ,bool } from 'prop-types';

class FullDescription extends Component{
    static propTypes = {
        comicData: object,
        getComicInfo: func,
        loading: bool
    }

    constructor (props) {
        super(props);
        this.state = {
        };
        
    }
    
    componentDidMount () {
        const { getComicInfo } = this.props;
        getComicInfo(this.props.id);
    }
    
    render(){
        const {comicData} = this.props;
        return(
        <View style = {styles.container}>        
            <View>
                <Text style={styles.titles}>{'Published on: '}</Text>        
                <Text style={styles.info}>{comicData.onSaleData ? comicData.onSaleData : "No info..."}</Text>        
            </View>
            <View>
                <Text style={styles.titles}>{'Writers: '}</Text>        
                <Text style={styles.info}>{comicData.writerString ? comicData.writerString : "No info..."}</Text>        
            </View>
            <View>
                <Text style={styles.titles}>{'Artist: '}</Text>        
                <Text style={styles.info}>{comicData.artistString ? comicData.artistString : "No info..."}</Text>
            </View>
            <View>
                <Text style={styles.titles}>{'Summary: '}</Text>        
                <Text >{comicData.description ? comicData.description : "No info..."}</Text>        
            </View>   
            <Text style={styles.titles}>{'Characters: '}</Text> 
        </View>    
    )}
}
const styles = {
    container:{      
       
       
    },
    info:{
        fontSize:18,
    },
    titles:{
        paddingBottom: 5,
        color:'#b2afaf',
    }

}

/**
 * The function takes data from the app current state,
 * and insert/links it into the props of our component.
 * This function makes Redux know that this component needs to be passed a piece of the state
 */
function mapStateToProps (state, props) {
    return {
        comicData: state.dataReducer.comicData,
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
export default connect(mapStateToProps, mapDispatchToProps)(FullDescription);