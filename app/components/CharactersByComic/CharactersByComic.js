import * as Actions from '../../actions';
import HeroCard from '../Card/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { array, func } from 'prop-types';

class CharactersByComic extends Component {

    static propTypes = {
        data: array,
        getHerosByComicId: func
    }

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
        const { getHerosByComicId } = this.props;
        getHerosByComicId(this.props.id);
    }

    render() {
        const { data, loading, navigation } = this.props;

        return (
            !loading ?
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        enableEmptySections={true}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ComicScreen', { id: item.id, title: item.name })
                            }>
                                {<HeroCard
                                    key={item.id}
                                    description={item.description}
                                    img={{ uri: item.image }}
                                    title={item.name}
                                    value={item.id}
                                />}
                            </TouchableOpacity>
                        )}
                    />
                </View>
                : <Text> loading data.... </Text>
        );
    }
}

const styles = {
    container: {
        flex: 1,

    }

}
function mapStateToProps(state, props) {
    return {
        data: state.dataReducer.herosComicByIdData,
        loading: state.dataReducer.loading
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CharactersByComic);