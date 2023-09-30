import { styled } from "@gluestack-style/react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import { Divider } from "@gluestack-ui/themed";
import Calc from "../../assets/svg/calculator-abstract.svg";

const CalculatorMain = () => {
  const { height } = useWindowDimensions();
  return (
    <Parent height={height / 2.8}>
      <View style={{ position: "absolute", end: 0, top: 0 }}>
        <Calc />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <TextComponent fontSize={48} textAlign="center">
          $110.20
        </TextComponent>
        <TextComponent fontSize={24} textAlign="center" color={colors.text}>
          250 liters
        </TextComponent>
      </View>

      <View
        style={{
          flex: 0.6,
          justifyContent: "flex-end",
        }}
      >
        <Divider bgColor={colors.borderColor} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <View>
            <TextComponent color={colors.text1}>per Liter</TextComponent>
            <TextComponent textAlign="center" color={colors.text1}>
              $20
            </TextComponent>
          </View>

          <View>
            <TextComponent color={colors.text1}>Distance</TextComponent>
            <TextComponent textAlign="center" color={colors.text1}>
              250km
            </TextComponent>
          </View>

          <View>
            <TextComponent color={colors.text1}>People</TextComponent>
            <TextComponent textAlign="center" color={colors.text1}>
              8
            </TextComponent>
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
