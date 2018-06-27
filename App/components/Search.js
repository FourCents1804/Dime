import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../../public';
const purchaseData = require('../../seed/purchaseData')

const formatMoney = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const renderPurchase = (purchase) => {
  const { name, amount, categoryBroad, categoryDetailed, createdAt } = purchase;

  return (
    <View>
      <Text style={styles.searchResultHeader}>{name}</Text>
      <Text style={styles.searchResultText}>Transaction Amount: {formatMoney(amount)}</Text>
      <Text style={styles.searchResultText}>Category: {categoryBroad}</Text>
      <Text style={styles.searchResultText}>Subcategory: {categoryDetailed}</Text>
      <Text style={styles.searchResultText}>Date: {createdAt}</Text>
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
      <View style={styles.searchContainer}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.searchAutoComplete}
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
        <View style={styles.searchDescriptionHeader}>
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


export default Search;
