import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
const purchaseData = require('../../seed/purchaseData')

const renderPurchase = (purchase) => {
  const { name, amount, categoryBroad, categoryDetailed, createdAt } = purchase;

  return (
    <View>
      <Text style={styles.directorText}>Transaction Name: {name}</Text>
      <Text style={styles.openingText}>Transaction Amount: {amount}</Text>
      <Text style={styles.openingText}>Category: {categoryBroad}</Text>
      <Text style={styles.openingText}>Subcategory: {categoryDetailed}</Text>
      <Text style={styles.openingText}>Date: {createdAt}</Text>
    </View>
  );
}

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      query: ''
    };
  }

  componentDidMount() {
    this.setState({ purchases: purchaseData });
  }

  findPurchase(query) {
    if (query === '') {
      return [];
    }

    const { purchases } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return purchases.filter(purchase => purchase.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const purchases = this.findPurchase(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={purchases.length === 1 && comp(query, purchases[0].name) ? [] : purchases}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="e.g. 'CVS'"
          renderItem={({ name, amount }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name })}>
              <Text style={styles.itemText}>
                {name} ({amount})
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {purchases.length > 0 ? (
            renderPurchase(purchases[0])
          ) : (
            <Text style={styles.infoText}>
              Enter Store Name
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default Search;
