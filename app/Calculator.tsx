import React from "react";
import ParentView from "../components/general/ParentView";
import CalculatorMain from "../components/calculator/CalculatorMain";
import InputData from "../components/general/InputData";

const Calculator = () => {
  return (
    <ParentView>
      <CalculatorMain />
      {/* <InputData /> */}
    </ParentView>
  );
};

export default Calculator;
