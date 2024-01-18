import React, { type ReactElement, useLayoutEffect, useState, useCallback } from 'react';
import {
  Badge,
  BadgeText,
  Icon,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
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
import { useSharedValue, withSpring } from 'react-native-reanimated';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const TopMenu = (onPress: () => void) => {
  return (
    <Pressable onPress={onPress}>
      <Icon as={Menu} color={theme.COLORS.white} size="lg" />
    </Pressable>
  );
};

const Calculator = ({ navigation }: Props): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCustomPeople, setCustomPeople] = useState(false);
  const [enableCalc, setEnableCalc] = useState(true);
  const [currency, setCurrency] = useState('IND (₹)');
  const [distanceUnit, setDistanceUnit] = useState('Kilometers');
  const [fuelPrice, setFuelPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelEffeciency, setFuelEffeciency] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sharePerPerson, setSharePerPerson] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { height } = useWindowDimensions();
  const toast = useToast();
  const scale = useSharedValue(1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        TopMenu(() => {
          setShowMenu(true);
        }),
    });
  }, [navigation]);

  const clear = useCallback(() => {
    scale.value = withSpring(1, { mass: 2, damping: 20 });
    setTotalQuantity(0);
    setTotalPrice(0);
    setSharePerPerson(0);
    setNumberOfPeople(1);

    setDistance(0);
    setFuelPrice(0);
    setFuelEffeciency(0);
  }, []);

  const calculations = () => {
    if (distance > 0 && fuelPrice > 0 && fuelEffeciency > 0) {
      scale.value = withSpring(2, { mass: 2, damping: 20 });
      if (distanceUnit === 'Kilometers') {
        const requiredFuel = distance / fuelEffeciency;
        const cost = requiredFuel * fuelPrice;
        const share = cost / (numberOfPeople == 0 ? 1 : numberOfPeople);
        setTotalQuantity(Math.ceil(requiredFuel));
        setTotalPrice(Math.ceil(cost));
        setSharePerPerson(Math.ceil(share));
      } else {
        const requiredFuel = (distance * 0.621371) / fuelEffeciency;
        const cost = requiredFuel * fuelPrice;
        const share = cost / (numberOfPeople == 0 ? 1 : numberOfPeople);
        setTotalQuantity(Math.ceil(requiredFuel));
        setTotalPrice(Math.ceil(cost));
        setSharePerPerson(Math.ceil(share));
      }
      setEnableCalc(false);
    } else {
      toast.show({
        placement: 'bottom',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="info" variant="solid">
              <VStack space="xs">
                <ToastTitle>New Message</ToastTitle>
                <ToastDescription>
                  Hey, just wanted to touch base and see how you doing. Let catch up soon!
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
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
            scale={scale}
          />
          <VStack marginTop={28} space="lg">
            <InputData
              title="Fuel Price"
              placeholder="Fuel price (per liter/gallon)"
              value={fuelPrice.toString()}
              setValue={(value: string) => {
                if (Number(value) !== fuelPrice) {
                  setFuelPrice(Number(value));
                  setEnableCalc(true);
                }
              }}
            />
            <InputData
              title="Fuel Efficiency"
              placeholder="Miles per Gallon/Kilometers per Liter"
              value={fuelEffeciency.toString()}
              setValue={(value: string) => {
                if (Number(value) !== fuelEffeciency) {
                  setFuelEffeciency(Number(value));
                  setEnableCalc(true);
                }
              }}
            />

            <InputData
              title="Distance"
              placeholder="Total distance (miles/kilometers)"
              value={distance.toString()}
              setValue={(value: string) => {
                if (Number(value) !== distance) {
                  setDistance(Number(value));
                  setEnableCalc(true);
                }
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
        </VStack>

        {!enableCalc ? (
          <PrimaryBtn title="Clear" onPress={clear} />
        ) : (
          <PrimaryBtn title="Calculate" onPress={calculations} />
        )}
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
          if (Number(value) !== numberOfPeople) {
            setNumberOfPeople(Number(value));
            setEnableCalc(true);
          }
        }}
      />
    </ParentView>
  );
};

export default Calculator;
