import React from 'react';
import { StyleSheet } from 'react-native';
import {Provider} from 'react-redux'
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
    const AppNavigator = createStackNavigator({
      Login: {screen: Login},
      LLogin: {screen: LLogin}
      });
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

