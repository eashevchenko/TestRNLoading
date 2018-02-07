import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressDialog from './Progress'

import ScreenComponent from './Screen';

export default class App extends ScreenComponent {

  componentDidMount() {
    super.startLoadingWithMask();
    super.dismissLoadingWithDelay(2);
  }

  render() {
    super.render();
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
