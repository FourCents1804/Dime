import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../public";

const formatMoney = number => {
  return number.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
};

const renderPurchase = purchase => {
  const { name, amount, categoryBroad, categoryDetailed, date } = purchase;

  return (
    <View>
      <Text style={styles.regSmallTitle}>{name}</Text>
      <Text style={styles.regText}>
        Transaction Amount: {formatMoney(amount)}
      </Text>
      <Text style={styles.regText}>
        Category: {categoryBroad ? categoryBroad : "N/A"}
      </Text>
      <Text style={styles.regText}>
        Subcategory: {categoryDetailed ? categoryDetailed : "N/A"}
      </Text>
      <Text style={styles.regText}>Date: {`${new Date(date)}`}</Text>
    </View>
  );
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      query: ""
    };
  }

  async componentDidMount() {
    await this.setState({
      purchases: this.props.navigation.state.params.purchases
    });

    if (this.state.purchases.length === 1) {
      this.setState({ query: this.state.purchases[0].name });
    }
    console.log(this.state);
  }

  findPurchase(query) {
    if (query === "") {
      return [];
    }

    const { purchases } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return purchases.filter(purchase => purchase.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const { navigate, pop } = this.props.navigation;
    const purchases = this.findPurchase(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.searchContainer}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.searchAutoComplete}
          data={
            purchases.length === 1 && comp(query, purchases[0].name)
              ? []
              : purchases
          }
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="e.g. 'CVS'"
          renderItem={({ name, amount }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name })}>
              <Text style={styles.thinText}>
                {name} ({amount})
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.searchDescriptionHeader}>
          {purchases.length > 0 ? (
            <View>
              {renderPurchase(purchases[0])}
              <View style={{ alignSelf: "center" }}>
                <Button
                  onPress={() => {
                    navigate("EditPurchase", { product: purchases[0] });
                  }}
                  title="Edit Purchase"
                  raised={true}
                  backgroundColor="#0080ff"
                  style={styles.signUpButton}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Button
                  onPress={() => {
                    pop(1);
                  }}
                  title="Cancel"
                  raised={true}
                  backgroundColor="#0080ff"
                  style={styles.signUpButton}
                />
              </View>
            </View>
          ) : (
            <Text style={styles.smallTitle}>Enter Store Name</Text>
          )}
        </View>
      </View>
    );
  }
}

export default Search;
