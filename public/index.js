import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  homeContainer: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#fff7f2'
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
    backgroundColor: "#2a2a2a",
    height: "100%"
  },
  menuLabel: {
    backgroundColor: "#2a2a2a",
    height: 40,
    padding: 10,
    display: "flex",
    justifyContent: "center"
  },
  menuLabelText: {
    color: "#D3D3D3"
  },
  menuLinks: {
    backgroundColor: "#666666",
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
  h1Text: {
    textAlign: "center",
    fontSize: 25
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
    justifyContent: 'center'
  },
  spendTableDateText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12
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
  }
}));
