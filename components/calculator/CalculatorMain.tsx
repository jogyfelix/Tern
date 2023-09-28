import { styled } from "@gluestack-style/react";
import { View, useWindowDimensions } from "react-native";

const CalculatorMain = () => {
  const { height } = useWindowDimensions();
  return <Parent height={height / 2.2}></Parent>;
};

const Parent = styled(View, {
  backgroundColor: "$tileBg",
  justifyContent: "space-between",
  padding: 24,
  borderRadius: 16,
});

export default CalculatorMain;
