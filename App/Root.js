
import React from 'react';
import { View } from 'react-native';
import { Home, Login, Navigation, Menu, Loading, PurchaseConf } from './components';
import { connect } from 'react-redux';
import Firebase from './components/Firebase/Firebase';
import styles from '../public';
import Drawer from 'react-native-drawer';


class Root extends React.Component {
  state = {
    isLoggedIn: false,
    loading: true
  };
  componentDidMount() {
    Firebase.init();
    this.unsubscribe = Firebase.auth.onAuthStateChanged(user => {
      user
        ? this.setState({ isLoggedIn: true, loading: false })
        : this.setState({ isLoggedIn: false, loading: false });
    });
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  closeMenu = () => {
    this._drawer.close();
  };

  openMenu = () => {
    this._drawer.open();
  };

  render() {
    console.log('home', this.props)
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
      main: { paddingLeft: 3 }
    };
    const { navigate } = this.props.navigation;

    if (this.state.loading) {
      return (
        <Loading />
      );
    } else if (this.state.isLoggedIn) {
      return (
        <Drawer
          ref={ref => (this._drawer = ref)}
          type="displace"
          content={<Menu
navigate={navigate}
          purchases={this.props.purchases}
          recurringExpenses={this.props.recurringExpenses}
          hi="hi" />}
          tapToClose={true}
          openDrawerOffset={0.3}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={ratio => ({
            main: { opacity: (2 - ratio) / 2 }
          })}
        >
          <View style={{ flex: 1 }}>
            <Navigation navigate={navigate} openMenu={this.openMenu} />
            <Home
              navigate={navigate}
              purchases={this.props.purchases}
              user={this.props.user}
              recurringExpenses={this.props.recurringExpenses} />
          </View>
        </Drawer>
      );
    } else {
      return <Login navigate={navigate} />;
    }
  }
}

const mapStateToProps = state => {

  // const purchases = state.User.purchases ? Object.keys(state.User.purchases).map(purchase => state.User.purchases[purchase]) : []

  // const recurringExpenses = {
  //   amount: state.User.recurringExpenses ? Object.keys(state.User.recurringExpenses).reduce((total, key) => total + state.User.recurringExpenses[key], 0) : 0,
  //   categoryBroad: 'Utilities',
  //   categoryDetailed: 'Utilities',
  //   date: Date.now(),
  //   name: 'Recurring Expenses'
  // }

  return ({
    user: state.user.userInfo,
    purchases: state.purchases,
    recurringExpenses: state.expenses,
  })
}

export default connect(
  mapStateToProps,
  null
)(Root);
