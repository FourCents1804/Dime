
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import {
  Login,
  SignUp1,
  SignUp2,
  SignUp3,
  Home,
  Webcam,
  TakenImage,
  User,
  Expense,
  Navigation
} from "./components/index";
import Root from "./Root";
import store from "./store";
import { createStackNavigator } from "react-navigation";


const AppNavigator = createStackNavigator({
  Root: { screen: Root },
  Login: { screen: Login },
  SignUp: { screen: SignUp1 },
  Home: { screen: Home },
  SignUp2: { screen: SignUp2 },
  SignUpV3: { screen: SignUp3 },
  Webcam: { screen: Webcam },

  TakenImage: {screen:  TakenImage},
  User: {screen: User},
  Navigation: {screen: Navigation},
  Expense: { screen: Expense }

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
