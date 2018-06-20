import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Provider} from 'react-redux'
import { Button} from 'react-native-elements';
import {Login } from './components/index'
import store from './store';
import {createStackNavigator} from 'react-navigation'
import LLogin from './components/login'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>

        <Login />
      </View>
      </Provider>
    );
  }
}

export default createStackNavigator({
  Main: {
      screen: App,
      navigationOptions: {
        headerTitle: 'App',
      },
  }, Login: {
    screen: LLogin,
    navigationOptions: {
      headerTitle: 'Login',
    },
}
});
