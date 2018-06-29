import React from "react";
import { Text, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");
import styles from "../../public";

const formatMoney = number => {
  return number
    .toLocaleString(
      "en-US",
      { style: "currency", currency: "USD" }
    )
    .slice(0, -3);
};

const DonutCarousel = props => {
  const { categories, setSection } = props;

  return (
    <View style={styles.donutCarouselView}>
      <Swiper
        loadMinimal
        loadMinimalSize={1}
        style={styles.donutCarouselWrapper}
        loop={false}
        onIndexChanged={index => setSection(index - 1)}
      >
        {categories.map(category => (
          <View key={category} style={styles.slide1}>
            <Text style={styles.donutCarouselText}>You have spent</Text>
            <Text style={styles.lightTitle}>{formatMoney(category.value)}</Text>
            <Text style={styles.donutCarouselText}>in {category.key}</Text>
            <Text style={styles.donutCarouselText}>this month.</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default DonutCarousel;
