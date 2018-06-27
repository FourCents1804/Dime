import React from 'react';
import Firebase from './components/Firebase/Firebase';
import { Provider } from 'react-redux';
import {
  Login,
  SignUp1,
  SignUp2,
  SignUp3,
  Home,
  Webcam,
  TakenImage,
  User,
  Purchase,
  Navigation,
  Menu
} from './components/index';
import Root from './Root';
import store from './store';
import { createStackNavigator } from 'react-navigation';


const AppNavigator = createStackNavigator({
  Root: { screen: Root },
  Login: { screen: Login },
  SignUp: { screen: SignUp1 },
  Home: { screen: Home },
  SignUp2: { screen: SignUp2 },
  SignUpV3: { screen: SignUp3 },
  Webcam: { screen: Webcam },
  TakenImage: { screen: TakenImage },
  User: { screen: User },
  Purchase: { screen: Purchase },
  Navigation: { screen: Navigation },
  Menu: {screen: Menu}

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
