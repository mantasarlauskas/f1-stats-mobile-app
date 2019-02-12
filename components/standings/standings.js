import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Header from '../header';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text>
      KIras
    </Text>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#000' }]} />
);

class Standings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'drivers', title: 'Lenktynininkai' },
        { key: 'teams', title: 'Komandos' },
      ]
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Header navigation={navigation} />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          onIndexChange={index => this.setState({ index })}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default Standings;