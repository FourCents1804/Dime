import React from "react";
import { Provider } from "react-redux";
import {
  Login,
  SignUpP1,
  SignUpP2,
  SignUpP3,
  Home,
  Webcam,
  TakenImage,
  User,
  Purchase,
  Navigation,
  Menu,
  PastSpend,
  AboutUs,
  FAQ,
  Search,
  SpendHistory,
  FutureProjections,
  PurchaseMap
} from "./components/index";
import Root from "./Root";
import store from "./store";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Root: { screen: Root },
    Login: { screen: Login },
    SignUpP1: { screen: SignUpP1 },
    Home: { screen: Home },
    SignUpP2: { screen: SignUpP2 },
    SignUpP3: { screen: SignUpP3 },
    Webcam: { screen: Webcam },
    TakenImage: { screen: TakenImage },
    User: { screen: User },
    Purchase: { screen: Purchase },
    Navigation: { screen: Navigation },
    Menu: { screen: Menu },
    PastSpend: { screen: PastSpend },
    AboutUs: { screen: AboutUs },
    FAQ: { screen: FAQ },
    Search: { screen: Search },
    SpendHistory: { screen: SpendHistory },
    FutureProjections: { screen: FutureProjections },
    PurchaseMap: { screen: PurchaseMap }
  },
  {
    initialRouteName: "Root",
    headerMode: "none"
  }
);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
