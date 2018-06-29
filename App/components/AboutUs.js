import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";

const questionsNAnswers = [
  {
    name: "Hyun Jae (Jay) Lee",
    description:
      "Before stepping into tech industry, Jay was working in logistics field. Actively looked for career change and found that he was interested in coding. He seriously seeked for source to learn deeply and joined Fullstack Academy of Code in April. He is super excited to be a future dev!"
  },
  {
    name: "Jenny Wang",
    description:
      "Student of software development with a background in the humanities, including art history and psychology. Enthusiastic about full stack web development, music, and learning languages. "
  },
  {
    name: "Ryan Wetmore",
    description:
      "A Software Engineer who's goal is to continue expanding my knowledge about the field he is passionate and make long lasting connections with those in the field of Computer Science to benefit himself and others who share this sentiment."
  },
  {
    name: "Yacine Benzerga",
    description:
      "Fullstack Software engineer (Node/Express/React/SQL based Databases) and Machine Learning practitioner with experience in implementing data mining and statistical machine learning/Deep ANN solutions (Python Sklearn/Tensor Flow/XGBoost/Numpy/Scipy/Pandas). Previous experience in Nanotechnology computing on Graphene technologies and application in efficient hydrogen storage."
  }
];

const AboutUs = props => {
  return (
    <ScrollView>
      <Text style={styles.aboutUsHeader}>Team Members</Text>
      {questionsNAnswers.map(el => {
        return (
          <View key={el.name}>
            <Card title={el.name} titleStyle={sanFranciscoWeights.medium}>
              <Text style={[sanFranciscoWeights.light, styles.faqContent]}>
                {el.description}
              </Text>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AboutUs;
