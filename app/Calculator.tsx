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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Calculator = (): ReactElement => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [currency, setCurrency] = useState('IND (₹)');
  const [distanceUnit, setDistanceUnit] = useState('Kilometers');
  const [fuelUnit, setFuelUnit] = useState('Liters');
  const [fuelPrice, setFuelPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelEffeciency, setFuelEffeciency] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [
    totalPrice,
    // setTotalPrice
  ] = useState(0);
  const [
    sharePerPerson,
    // setSharePerPerson
  ] = useState(0);
  const [
    totalQuantity,
    // setTotalQuantity
  ] = useState(0);

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
      <CalculatorMain
        totalPrice={totalPrice}
        sharePerPerson={sharePerPerson}
        totalQuantity={totalQuantity}
        fuelPrice={fuelPrice}
        numberOfPeople={numberOfPeople}
        currency={currency}
        distanceUnit={distanceUnit}
        fuelUnit={fuelUnit}
      />

      <KeyboardAwareScrollView style={{ marginTop: 16 }}>
        <VStack space="lg" paddingBottom={24}>
          <InputData
            title="Fuel Price"
            placeholder="Fuel price (per liter/gallon)"
            value={fuelPrice.toString()}
            setValue={(value: string) => {
              setFuelPrice(Number(value));
            }}
          />
          <InputData
            title="Fuel Efficiency"
            placeholder="Miles per Gallon/Kilometers per Liter"
            value={fuelEffeciency.toString()}
            setValue={(value: string) => {
              setFuelEffeciency(Number(value));
            }}
          />

          <InputData
            title="Distance"
            placeholder="Total distance (miles/kilometers)"
            value={distance.toString()}
            setValue={(value: string) => {
              setDistance(Number(value));
            }}
          />
          <SliderData setValue={setNumberOfPeople} />
        </VStack>
      </KeyboardAwareScrollView>
      <PrimaryBtn onPress={() => {}} />

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
