import { StyleSheet } from "react-native";
import { material } from 'react-native-typography'
import { systemWeights } from 'react-native-typography'

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f2",
    alignItems: "center",
    justifyContent: "center",
  },
  homeContainer: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#fff7f2',
    width: '100%'
  },
  scrollContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerChart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerL: {
    flex: 1,
    justifyContent: "center"
  },
  backgroundImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 500
  },
  loginButton: {
    margin: 10
  },
  signUp: {
    textAlign: "center"
  },
  signUpFont: {
    fontSize: 5,
    textAlign: "center"
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "grey",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  drawerStyles: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  menu: {
    backgroundColor: "#383838",
    height: "100%"
  },
  menuLabel: {
    backgroundColor: "#494949",
    height: 40,
    padding: 10,
    display: "flex",
    justifyContent: "center"
  },
  menuLabelText: {
    color: "#D3D3D3"
  },
  menuLinks: {
    backgroundColor: "#383838",
    height: 60,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    borderTopColor: "white",
    borderTopWidth: 0.5
  },
  menuLinkText: {
    color: "white"
  },
  linkText: {
    color: "white",
    fontSize: 35
  },
  inputLine: {
    width: 250,
    margin: 10
  },
  row: {
    flexDirection: "row"
  },
  fontM: {
    fontSize: 20,
    alignSelf: "center"
  },
  dividerM: {
    height: 80,
    backgroundColor: "transparent"
  },
  dividerS: {
    height: 50,
    backgroundColor: "transparent"
  },
  dividerVS: {
    height: 15,
    backgroundColor: "transparent"
  },
  logo: {
    height: 50,
    width: 50,
    zIndex: 1,
    top: -60
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  actionButton: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35
  },
  navBar: {
    backgroundColor: "pink"
  },
  donutContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 270
  },
  donutText: {
    textAlign: "center"
  },
  donutCarousel: {
    position: 'absolute',
    top: 80,
  },
  spendTableDate: {
    backgroundColor: '#008ECC',
    height: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  spendTableDateText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    ...systemWeights.bold,
    ...material.captionObject,
  },
  spendTableRow: {
      backgroundColor: '#fff7f2',
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: 20,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  spendTableAmount: {
      alignSelf: 'flex-end',
      ...systemWeights.light,
      ...material.body1Object,
  },
  spendTableText: {
    ...systemWeights.light,
    ...material.body1Object,
  },
  faqContent: {
    textAlign: "center"
  },
  searchContainer: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 50
  },
  searchAutoComplete: {
    marginLeft: 20,
    marginRight: 20
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  searchDescriptionHeader: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  searchResultHeader: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  searchResultText: {
    textAlign: 'center',
    fontSize: 14
  },
  aboutUsHeader: {
    fontSize: 20,
    textAlign: 'center',
  },
  lightTitle: {
    alignSelf: 'center',
    ...material.display1Object,
    ...systemWeights.light,
    color: 'black'
  },
  thinTitle: {
    alignSelf: 'center',
    ...material.display1Object,
    ...systemWeights.thin,
    color: 'black'
  },
  donutCarouselWrapper: {
    height: 140,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  donutCarouselView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  donutCarouselText: {
    alignSelf: 'center',
    ...systemWeights.light,
  }
}));
