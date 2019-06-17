import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/containers/Home';
import Show from './src/containers/Show';
import store from './src/redux/Store';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store} >
          <View style={styles.container}>
              <Home />
              <Show />
          </View>
      </Provider>
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
