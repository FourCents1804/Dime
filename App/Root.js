import React from 'react';
import {  View, ActivityIndicator } from 'react-native';
import {  me } from './store/Thunks/User';
import { Home, Login, Navigation, SignUpP3, Menu } from './components';
import { connect } from 'react-redux';
import Firebase from './components/Firebase/Firebase';
import styles from '../public';
import Drawer from 'react-native-drawer';

class Root extends React.Component {
  state = {
    isLoggedIn: false,
    loading: true
  };
  async componentDidMount() {
    Firebase.init();
    Firebase.auth.onAuthStateChanged(user => {
      console.log('user retrieved')
      console.log('loading1', this.state.loading)
      user
        ? this.setState({ isLoggedIn: true, loading: false })
        : this.setState({ isLoggedIn: false, loading: false });
    })
    console.log('loading2', this.state.loading)
  }


  closeMenu = () => {
    this._drawer.close();
  };

  openMenu = () => {
    this._drawer.open();
  };

  render() {
    console.log('render loading', this.state.loading)
    console.log('render loggedin', this.state.isLoggedIn)
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
      main: { paddingLeft: 3 }
    };
    const { navigate } = this.props.navigation;

    if (this.state.loading) {
      return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#008ECC" />
      </View>)
    } else if (this.state.isLoggedIn) {
      return (
        <Drawer
        ref={ref => (this._drawer = ref)}
        type="displace"
        content={<Menu navigate={navigate} />}
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
          <Home navigate={navigate} />
        </View>
        </Drawer>
      )
    } else {
      return (
      <Login navigate={navigate} />
    )
    }
  }
}

const mapStateToProps = state => ({
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(me())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
