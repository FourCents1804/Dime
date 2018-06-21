import React from 'react';
import { StyleSheet } from 'react-native';
import {Provider} from 'react-redux'
import {Login, SignUp1, SignUp2 } from './components/index'
import store from './store'

import {createStackNavigator} from 'react-navigation'


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
      SignUp: {screen: SignUp1 },
      SignUp2: {screen: SignUp2},

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
