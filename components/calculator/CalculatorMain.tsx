import { styled } from "@gluestack-style/react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const CalculatorMain = () => {
  const { height } = useWindowDimensions();
  return (
    <Parent height={height / 2.4}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <TextComponent fontSize={48} textAlign="center">
          $110.20
        </TextComponent>
        <TextComponent fontSize={24} textAlign="center">
          250 liters
        </TextComponent>
      </View>

      <View
        style={{
          flex: 0.6,
          justifyContent: "flex-end",
        }}
      >
        <TextComponent fontSize={16}>Other details</TextComponent>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <TextComponent>per liter</TextComponent>
            <TextComponent>$20</TextComponent>
          </View>

          <View>
            <TextComponent>distance</TextComponent>
            <TextComponent>250km</TextComponent>
          </View>

          <View>
            <TextComponent>people</TextComponent>
            <TextComponent>8</TextComponent>
          </View>
        </View>
      </View>
    </Parent>
  );
};

const Parent = styled(View, {
  backgroundColor: colors.cardBg,
  padding: 16,
  borderRadius: 16,
  justifyContent: "center",
});

const TextComponent = styled(Text, {
  color: colors.white,
  fontFamily: fonts.default,
});

export default CalculatorMain;
