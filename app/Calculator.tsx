import React, { type ReactElement, useLayoutEffect, useState } from 'react';
import ParentView from '../components/general/ParentView';
import CalculatorMain from '../components/calculator/CalculatorMain';
import InputData from '../components/general/InputData';
import PrimaryBtn from '../components/general/PrimaryBtn';
import SliderData from '../components/general/SliderData';
import { Icon, VStack } from '@gluestack-ui/themed';
import { useNavigation } from 'expo-router';
import colors from '../constants/colors';
import { Pressable } from 'react-native';
import { Menu } from 'lucide-react-native';
import CalculatorSettings from '../components/calculator/CalculatorSettings';

const Calculator = (): ReactElement => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [currency, setCurrency] = useState('IND (₹)');
  const [distanceUnit, setDistanceUnit] = useState('Kilometers');
  const [fuelUnit, setFuelUnit] = useState('Liters');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            setShowMenu(true);
          }}
        >
          <Icon as={Menu} color={colors.white} size="lg" />
        </Pressable>
      ),
    });
  }, []);
  return (
    <ParentView type="space-between">
      <CalculatorMain />
      <VStack space="lg">
        <InputData title="Fuel Price" placeholder="Fuel price (per liter/gallon)" />
        <InputData title="Distance" placeholder="Total distance (miles/kilometers)" />
        <SliderData />
      </VStack>
      <PrimaryBtn />
      <CalculatorSettings
        isOpen={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        currency={currency}
        distanceUnit={distanceUnit}
        fuelUnit={fuelUnit}
        setCurrency={setCurrency}
        setDistanceUnit={setDistanceUnit}
        setFuelUnit={setFuelUnit}
      />
    </ParentView>
  );
};

export default Calculator;
