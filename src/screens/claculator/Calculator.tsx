import React, { type ReactElement, useLayoutEffect, useState } from 'react';
import { Badge, BadgeText, Icon, VStack } from '@gluestack-ui/themed';
import { Pressable, StatusBar, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Menu } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ParentView from '../../components/general/ParentView';
import CalculatorMain from '../../components/calculator/CalculatorMain';
import InputData from '../../components/general/InputData';
import PrimaryBtn from '../../components/general/PrimaryBtn';
import CalculatorSettings from '../../components/calculator/CalculatorSettings';
import NumberOfPeopleInput from '../../components/calculator/NumberOfPeopleInput';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { theme } from '../../constants/theme';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const TopMenu = (onPress: () => void) => {
  return (
    <Pressable onPress={onPress}>
      <Icon as={Menu} color={theme.COLORS.white} />
    </Pressable>
  );
};

const Calculator = ({ navigation }: Props): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCustomPeople, setCustomPeople] = useState(false);
  const [currency, setCurrency] = useState('IND (₹)');
  const [distanceUnit, setDistanceUnit] = useState('Kilometers');
  const [fuelPrice, setFuelPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelEffeciency, setFuelEffeciency] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sharePerPerson, setSharePerPerson] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { height } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        TopMenu(() => {
          setShowMenu(true);
        }),
    });
  }, [navigation]);

  const calculations = (): void => {
    if (distanceUnit === 'Kilometers') {
      const requiredFuel = distance / fuelEffeciency;
      const cost = requiredFuel * fuelPrice;
      const share = cost / numberOfPeople;
      setTotalQuantity(Math.ceil(requiredFuel));
      setTotalPrice(Math.ceil(cost));
      setSharePerPerson(Math.ceil(share));
    } else {
      const requiredFuel = (distance * 0.621371) / fuelEffeciency;
      const cost = requiredFuel * fuelPrice;
      const share = cost / numberOfPeople;
      setTotalQuantity(Math.ceil(requiredFuel));
      setTotalPrice(Math.ceil(cost));
      setSharePerPerson(Math.ceil(share));
    }
  };
  return (
    <ParentView type="space-between">
      <StatusBar backgroundColor={theme.COLORS.black} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'space-between', height: height / 1.2 }}
      >
        <VStack space="lg">
          <CalculatorMain
            totalPrice={totalPrice}
            sharePerPerson={sharePerPerson}
            totalQuantity={totalQuantity}
            fuelPrice={fuelPrice}
            numberOfPeople={numberOfPeople}
            currency={currency}
            distanceUnit={distanceUnit}
          />
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
          <TouchableOpacity
            onPress={() => {
              setCustomPeople(true);
            }}
          >
            <Badge
              size="lg"
              variant="solid"
              borderRadius={8}
              action="info"
              alignSelf="center"
              bg={theme.COLORS.cardBg}
              padding={6}
            >
              <BadgeText
                fontFamily={theme.FONTS.default}
                color={theme.COLORS.text}
                textTransform="none"
              >
                more options
              </BadgeText>
            </Badge>
          </TouchableOpacity>
        </VStack>

        <PrimaryBtn title="Calculate" onPress={calculations} />
      </KeyboardAwareScrollView>
      <CalculatorSettings
        isOpen={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        currency={currency}
        distanceUnit={distanceUnit}
        setCurrency={setCurrency}
        setDistanceUnit={setDistanceUnit}
      />

      <NumberOfPeopleInput
        isOpen={showCustomPeople}
        onClose={() => {
          setCustomPeople(false);
        }}
        value={numberOfPeople.toString()}
        setValue={(value: string) => {
          setNumberOfPeople(Number(value));
        }}
      />
    </ParentView>
  );
};

export default Calculator;
