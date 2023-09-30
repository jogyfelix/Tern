import React from "react";
import ParentView from "../components/general/ParentView";
import CalculatorMain from "../components/calculator/CalculatorMain";
import InputData from "../components/general/InputData";
import PrimaryBtn from "../components/general/PrimaryBtn";
import SliderData from "../components/general/SliderData";
import { VStack } from "@gluestack-ui/themed";

const Calculator = () => {
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
    </ParentView>
  );
};

export default Calculator;
