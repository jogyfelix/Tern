import React from "react";
import CalculatorTile from "../../components/home/CalculatorTile";
import ParentView from "../../components/general/ParentView";
import UserDetailsTile from "../../components/home/UserDetailsTile";
import { useRouter } from "expo-router";

const Home = () => {
  const navigation = useRouter();
  return (
    <ParentView>
      <UserDetailsTile
        name="Jogy Felix"
        question="How’s your day ? blah blah"
      />
      <CalculatorTile
        label="Fuel Calculator"
        onPress={() => navigation.push("/Calculator")}
      />
    </ParentView>
  );
};

export default Home;
