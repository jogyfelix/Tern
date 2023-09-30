import React, { useLayoutEffect, useState } from "react";
import ParentView from "../components/general/ParentView";
import CalculatorMain from "../components/calculator/CalculatorMain";
import InputData from "../components/general/InputData";
import PrimaryBtn from "../components/general/PrimaryBtn";
import SliderData from "../components/general/SliderData";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Icon,
  VStack,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
} from "@gluestack-ui/themed";
import { useNavigation } from "expo-router";
import colors from "../constants/colors";
import { Pressable } from "react-native";
import { Menu } from "lucide-react-native";

const Calculator = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setShowMenu(true)}>
          <Icon as={Menu} color={colors.white} size="lg" />
        </Pressable>
      ),
    });
  }, []);
  return (
    <ParentView type="space-between">
      <CalculatorMain />
      <VStack space="lg">
        <InputData
          title="Fuel Price"
          placeholder="Fuel price (per liter/gallon)"
        />
        <InputData
          title="Distance"
          placeholder="Total distance (miles/kilometers)"
        />
        <SliderData />
      </VStack>
      <PrimaryBtn />
      <Actionsheet
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        zIndex={999}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent
          zIndex={999}
          bgColor={colors.cardBg}
          style={{
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <InputData
            title="Distance"
            placeholder="Total distance (miles/kilometers)"
          />
        </ActionsheetContent>
      </Actionsheet>
    </ParentView>
  );
};

export default Calculator;
