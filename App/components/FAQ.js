import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";

const questionsNAnswers = [
  {
    q: "What is Dime?",
    a:
      "Dime is personal finance app that provides spending analysis and prediction by analyzing your spending habits."
  },
  {
    q: "How do I register with Dime?",
    a:
      "It is pretty simple! Please click 'Sign-up' and simply fill out the form!"
  },
  {
    q: "Do you have a offline branch for consultation?",
    a:
      "Unfortunately, we do not have offline branch at this moment. We are currently trying to establish our first branch in NYC next month!"
  },
  {
    q: "How do I contact Dime?",
    a:
      "There are two ways to contact us.\nPhone: 212-333-4567\nEmail: info@dime.io"
  }
];

const FAQ = props => {
  return (
    <View>
      {questionsNAnswers.map(el => {
        return (
          <View key={el.q}>
            <Card title={el.q} titleStyle={sanFranciscoWeights.medium}>
              <Text style={[sanFranciscoWeights.light, styles.faqContent]}>
                {el.a}
              </Text>
            </Card>
          </View>
        );
      })}
    </View>
  );
};

export default FAQ;
