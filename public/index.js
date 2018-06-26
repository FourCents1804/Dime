import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerChart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerL: {
    flex: 1,
    justifyContent: 'center'
  },
  backgroundImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
  loginButton: {
    margin: 10
  },
  signUp: {
    textAlign: 'center'
  },
  signUpFont: {
    fontSize: 5,
    textAlign: 'center'
  },
  loginContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    width: 300
  },
  drawerStyles: {
    shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3
  },
  menu: {
    backgroundColor: '#2a2a2a',
    height: '100%'
  },
  menuLabel: {
    backgroundColor: '#2a2a2a',
    height: 40,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  menuLabelText: {
    color: '#D3D3D3'
  },
  menuLinks: {
    backgroundColor: '#666666',
    height: 60,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    borderTopColor: 'white',
    borderTopWidth: 0.5,
  },
  menuLinkText: {
    color: 'white'
  },
  inputLine: {
    width: 250,
    margin: 10
  },
  row: {
    flexDirection: 'row'
  },
  fontM: {
    fontSize: 20,
    alignSelf: 'center'
  },
  dividerM: {
    height: 80,
    backgroundColor: 'transparent'
  },
  dividerS: {
    height: 50,
    backgroundColor: 'transparent'
  },
  dividerVS: {
    height: 15,
    backgroundColor: 'transparent'
  },
  logo: {
    height: 50,
    width: 50,
    zIndex: 1,
    top: -60
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
