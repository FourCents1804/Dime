import React from 'react';
import { View } from 'react-native';
import { me } from './store/Thunks/User';
import { Home, Login, Navigation, Menu } from './components';
import { connect } from 'react-redux';
import Firebase from './components/Firebase/Firebase';
import styles from '../public';
import Drawer from 'react-native-drawer';

class Root extends React.Component {
  state = {
    isLoggedIn: false
  };
  async componentDidMount() {
    console.log('Mounted the Component', this.state.isLoggedIn)
    Firebase.init();
    // await this.props.isLoggedIn()
    console.log('Mounted the Component', this.state.isLoggedIn)
    console.log(this.props.user)
    Firebase.auth.onAuthStateChanged(user => {
      user
      ? this.setState({ isLoggedIn: true })
      : this.setState({ isLoggedIn: false });
  })}

  closeMenu = () => {
    this._drawer.close();
  };

  openMenu = () => {
    this._drawer.open();
  };

  render() {
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
      main: { paddingLeft: 3 }
    };
    const { navigate } = this.props.navigation;
    return this.state.isLoggedIn ? (
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
    ) : (
      <Login navigate={navigate} />
    );
    // return (
    //   <Drawer
    //   ref={ref => (this._drawer = ref)}
    //   type="displace"
    //   content={<Menu navigate={navigate} />}
    //   tapToClose={true}
    //   openDrawerOffset={0.3}
    //   panCloseMask={0.2}
    //   closedDrawerOffset={-3}
    //   styles={drawerStyles}
    //   tweenHandler={ratio => ({
    //     main: { opacity: (2 - ratio) / 2 }
    //   })}
    // >
    //   <View style={styles.container}>
    //     <Navigation navigate={navigate} openMenu={this.openMenu} />
    //     <Home navigate={navigate} />
    //   </View>
    //   </Drawer>
    // )
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
