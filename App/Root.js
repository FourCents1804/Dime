import React from 'react';
import { ScrollView, View } from 'react-native';
import { auth } from './store/Thunks/User';
import { Home, Login, Navigation, Menu } from './components';
import { connect } from 'react-redux';
import { me } from './store';
import styles from '../public';
import Drawer from 'react-native-drawer';


class Root extends React.Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }

  closeMenu = () => {
    this._drawer.close()
  }

  openMenu = () => {
    this._drawer.open()
  }


  render() {
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }
    const { navigate } = this.props.navigation;
    let { user } = this.props;
    if (user === undefined) user = {};
      // return user.id ? (
        // <View  style={{flex: 1}}>
        // <Navigation navigate={navigate} />
        // <Home navigate={navigate} />
        // </View>
      // ) : (
      //   <Login navigate={navigate} />
      // );
  return (
    <Drawer
      ref={(ref) => this._drawer = ref}
      type="displace"
      content={<Menu navigate={navigate} />}
      tapToClose={true}
      openDrawerOffset={0.3}
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}

    >
    <View  style={{flex: 1}}>
    <Navigation navigate={navigate} openMenu={this.openMenu} />
    <Home navigate={navigate} />
    </View>
    </Drawer>
  )
  }
}

const mapStateToProps = state => ({
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(me()),
  auth: (userData, formName) => dispatch(auth(userData, formName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
