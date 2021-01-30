import MarvelHeader from '../components/MarvelHeader/MarvelHeader';
import DescriptionHeader from '../components/DescriptionHeader/DescriptionHeader';
import FullDescription from '../components/FullDescription/FullDescription';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CharactersByComic from '../components/CharactersByComic/CharactersByComic';

class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'default');
        const title = navigation.getParam('title', 'default');
        return (
            <View style={styles.container}>
                <MarvelHeader />
                <DescriptionHeader navigation={navigation} subtitle={'Comic details'} title={title} />
                <ScrollView>
                    <FullDescription id={id} />
                    <CharactersByComic id={id} navigation={navigation} />
                </ScrollView>
            </View>
        );
    }
}


DetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

DetailScreen.navigationOptions = {
    //title: '',
    header: null
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flex: 1
    }
});

export default DetailScreen;
