import React, { type ReactElement, useLayoutEffect, useState, useCallback, useRef } from 'react';
import { InputIcon, Toast, ToastDescription, VStack, useToast } from '@gluestack-ui/themed';
import { StatusBar, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ParentView from '../../components/ParentView';
import CalculatorMain from './components/CalculatorMain';
import InputData from '../../components/InputData';
import PrimaryBtn from '../../components/PrimaryBtn';
import CalculatorSettings from './components/CalculatorSettings';
import NumberOfPeopleInput from './components/NumberOfPeopleInput';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { theme } from '../../constants/theme';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import strings from '../../constants/strings';
import { AddPeople, TopMenu } from './components';
import { Banknote, LandPlot, Sparkles } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFuelCalculator } from '../../redux/slices/fuelCalculatorSlice';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Calculator = ({ navigation }: Props): ReactElement => {
  const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  const [showCustomPeople, setCustomPeople] = useState(false);
  const [enableCalc, setEnableCalc] = useState(true);
  // const [currency, setCurrency] = useState<currencyType>('IND (₹)');
  // const [distanceUnit, setDistanceUnit] = useState<distanceUnittType>('Kilometers');
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
  const fuelPriceRef = useRef();
  const fuelEffeciencyRef = useRef();
  const distanceRef = useRef();
  const userDetails = useSelector((state: any) => state.user);

  const clear = useCallback(() => {
    scale.value = withSpring(1, { mass: 2, damping: 20 });
    setTotalQuantity(0);
    setTotalPrice(0);
    setSharePerPerson(0);
    setNumberOfPeople(1);
    setDistance(0);
    setFuelPrice(0);
    setFuelEffeciency(0);
    setEnableCalc(true);
  }, []);

  const calculations = () => {
    if (distance > 0 && fuelPrice > 0 && fuelEffeciency > 0) {
      scale.value = withSpring(2, { mass: 2, damping: 20 });
      if (userDetails.unit === 'Kilometers') {
        const requiredFuel = distance / fuelEffeciency;
        const cost = requiredFuel * fuelPrice;
        const share = cost / (numberOfPeople == 0 ? 1 : numberOfPeople);
        setTotalQuantity(Math.ceil(requiredFuel));
        setTotalPrice(Math.ceil(cost));
        setSharePerPerson(Math.ceil(share));
        dispatch(
          setFuelCalculator({
            lastCalculated: Math.ceil(cost),
            lastDate: new Date().toISOString(),
            lastCurrency: userDetails.currency.symbol,
          })
        );
      } else {
        const requiredFuel = (distance * 0.621371) / fuelEffeciency;
        const cost = requiredFuel * fuelPrice;
        const share = cost / (numberOfPeople == 0 ? 1 : numberOfPeople);
        setTotalQuantity(Math.ceil(requiredFuel));
        setTotalPrice(Math.ceil(cost));
        setSharePerPerson(Math.ceil(share));
        dispatch(
          setFuelCalculator({
            lastCalculated: Math.ceil(cost),
            lastDate: new Date().toISOString(),
            lastCurrency: userDetails.currency.symbol,
          })
        );
      }
      setEnableCalc(false);
    } else {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="info" variant="solid" bg={theme.COLORS.cardBg}>
              <VStack space="xs">
                <ToastDescription color={theme.COLORS.text}>
                  {strings.ADD_DETAILS_TOAST}{' '}
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
            currency={userDetails.currency.symbol}
            distanceUnit={userDetails.unit}
            scale={scale}
          />
          <VStack marginTop={28} space="lg">
            <InputData
              reference={fuelPriceRef}
              keyType="next"
              placeholder={strings.FUEL_PRICE}
              value={fuelPrice.toString()}
              rightIcon={<InputIcon as={Banknote} color={theme.COLORS.text} />}
              setValue={(value: string) => {
                if (Number(value) !== fuelPrice) {
                  setFuelPrice(Number(value));
                  !enableCalc && setEnableCalc(true);
                }
              }}
              onSubmitEditing={() => fuelEffeciencyRef.current?.focus()}
            />
            <InputData
              reference={fuelEffeciencyRef}
              keyType="next"
              placeholder={strings.FUEL_EFFECIENCY}
              value={fuelEffeciency.toString()}
              rightIcon={<InputIcon as={Sparkles} color={theme.COLORS.text} />}
              setValue={(value: string) => {
                if (Number(value) !== fuelEffeciency) {
                  setFuelEffeciency(Number(value));
                  !enableCalc && setEnableCalc(true);
                }
              }}
              onSubmitEditing={() => distanceRef.current?.focus()}
            />

            <InputData
              reference={distanceRef}
              placeholder={strings.DISTANCE}
              value={distance.toString()}
              rightIcon={<InputIcon as={LandPlot} color={theme.COLORS.text} />}
              setValue={(value: string) => {
                if (Number(value) !== distance) {
                  setDistance(Number(value));
                  !enableCalc && setEnableCalc(true);
                }
              }}
            />
            <AddPeople
              onPress={() => {
                setCustomPeople(true);
              }}
            />
          </VStack>
        </VStack>

        {!enableCalc ? (
          <PrimaryBtn title={strings.CLEAR} onPress={clear} />
        ) : (
          <PrimaryBtn title={strings.CALCULATE} onPress={calculations} />
        )}
      </KeyboardAwareScrollView>
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
