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
  User
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
  User: { screen: User }
});

export default class App extends React.Component {
  state = {
    staticAssetsLoaded: false,
    authStatusReported: false,
    isUserAuthenticated: false
  };
  componentDidMount() {
    Firebase.init();
    Firebase.auth.onAuthStateChanged(user => {
      this.setState({authStatusReported: true, isUserAuthenticated: user});
    });
  }
  render() {
    const {authStatusReported, isUserAuthenticated} = this.state
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
