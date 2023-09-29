import React from "react";
import ParentView from "../components/general/ParentView";
import CalculatorMain from "../components/calculator/CalculatorMain";
import InputData from "../components/general/InputData";
import SliderData from "../components/general/SliderData";
import PrimaryBtn from "../components/general/PrimaryBtn";

const Calculator = () => {
  return (
    <ParentView type="space-between">
      <CalculatorMain />
      <InputData title="Cost/liter" />
      <InputData title="Distance" />
      <SliderData />
      <PrimaryBtn />
    </ParentView>
  );
};

export default Calculator;
