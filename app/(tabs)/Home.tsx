import React from "react";
import CalculatorTile from "../../components/home/CalculatorTile";
import ParentView from "../../components/general/ParentView";
import UserDetailsTile from "../../components/home/UserDetailsTile";

const Home = () => {
  return (
    <ParentView>
      <UserDetailsTile
        name="Jogy Felix"
        question="How’s your day ? blah blah"
      />
      <CalculatorTile label="Fuel Calculator" />
    </ParentView>
  );
};

export default Home;
