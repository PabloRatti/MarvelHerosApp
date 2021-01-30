import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ComicsGrid from '../components/ComicsGrid/ComicsGrid';
import MarvelHeader from '../components/MarvelHeader/MarvelHeader';
import DescriptionHeader from '../components/DescriptionHeader/DescriptionHeader';

export default class ComicScreen extends React.Component {
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
        <DescriptionHeader navigation={navigation} subtitle={'Comic List'} title={title} />
        <ComicsGrid navigation={navigation} id={id} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

ComicScreen.navigationOptions = { header: null };