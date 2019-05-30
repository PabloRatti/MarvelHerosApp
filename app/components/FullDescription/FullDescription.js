import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';

import { object, func, bool } from 'prop-types';

class FullDescription extends Component {
    static propTypes = {
        comicData: object,
        getComicInfo: func,
        loading: bool
    }

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
        const { getComicInfo } = this.props;
        getComicInfo(this.props.id);
    }

    render() {
        const { comicData } = this.props;
        return (
            <View style={styles.container}>
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
        )
    }
}
const styles = {
    container: {


    },
    info: {
        fontSize: 18,
    },
    titles: {
        paddingBottom: 5,
        color: '#b2afaf',
    }

}

function mapStateToProps(state, props) {
    return {
        comicData: state.dataReducer.comicData,
        loading: state.dataReducer.loading
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FullDescription);