import React from "react";
import { View, Text } from "react-native";
import colors from "../constants/colors";

const Home = () => {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <Text style={{ color: colors.DARK_BACKGROUND }}>Hello</Text>
    </View>
  );
};

export default Home;
