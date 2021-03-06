import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Header } from "react-native-elements";

const Navigation = props => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        flex: 1,
        alignSelf: "stretch",
        right: 0,
        left: 0
      }}
    >
      <Header
        placement="left"
        outerContainerStyles={{
          backgroundColor: "#008ECC",
          height: 71
        }}
        leftComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => {
              props.openMenu();
            }}
          >
            <Image
              style={{ height: 35, width: 35 }}
              source={require("../../public/menu.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Image
            style={{ height: 30, width: 150 }}
            resizeMode="contain"
            source={require("../../public/DimeLogo.png")}
          />
        }
      />
    </View>
  );
};

export default Navigation;
