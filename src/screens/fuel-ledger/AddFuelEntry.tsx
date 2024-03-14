import React, { useRef, useState } from 'react';
import { View, useWindowDimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, Toast, ToastDescription, VStack, useToast } from '@gluestack-ui/themed';
import { ArrowDownIcon, Droplets, Wallet } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import DateSelector from '../../components/DataSelector';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { addFuelEntry, fuelEntryType } from '../../redux/slices/fuelLedgerSlice';
import FuelTypePicker from './components/FuelTypePicker';
import strings from '../../constants/strings';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddFuelEntry = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const dispatch = useDispatch();
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showFuelPicker, setShowFuelPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [type, setType] = useState('Select fuel type');
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState('');
  const ledger = useSelector((state: any) => state.fuelLedger.ledgerList);
  const userDetails = useSelector((state: any) => state.user);
  const totalAmountRef = useRef();
  const totalQuantityRef = useRef();
  const noteRef = useRef();
  const toast = useToast();

  const datePress = () => {
    setShowDate(true);
  };

  const timePress = () => {
    setShowTime(true);
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    setShowDate(false);
    setDate(selectedDate);
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime: Date) => {
    setShowTime(false);
    setTime(selectedTime);
  };

  const onPress = () => {
    if (type != 'Select fuel type' && amount > 0 && quantity > 0) {
      const newId = (ledger[ledger.length - 1]?.id ?? 0) + 1;
      const newEntry: fuelEntryType = {
        id: newId,
        type,
        amount,
        quantity,
        quantityUnit: userDetails.fuelUnit,
        currency: userDetails.currency.symbol,
        date: date.toISOString(),
        time: time.toISOString(),
        note,
      };
      dispatch(addFuelEntry(newEntry));
      navigation.goBack();
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="info" variant="solid" bg={theme.COLORS.cardBg}>
              <VStack space="xs">
                <ToastDescription color={theme.COLORS.text}>
                  Fuel Entry added successfully
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    } else {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="info" variant="solid" bg={theme.COLORS.cardBg}>
              <VStack space="xs">
                <ToastDescription color={theme.COLORS.text}>
                  {strings.ADD_DETAILS_GENERAL_TOAST}
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
  };
  return (
    <View style={styles.container}>
      <TopTabBar
        title="Add fuel entry"
        backPress={() => {
          navigation.goBack();
        }}
        isKeyboardVisible={isKeyboardVisible}
      />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'space-between', height: height / 1.2 - 160 }}
      >
        <VStack gap={28} marginTop={28} marginHorizontal={16}>
          <DateSelector datePress={datePress} timePress={timePress} date={date} time={time} />
          <TouchableOpacity
            onPress={() => setShowFuelPicker(true)}
            style={{
              height: 52,
              borderRadius: theme.DIMENSIONS.inputBorder,
              backgroundColor: theme.COLORS.cardBg1,
              justifyContent: 'space-between',
              paddingStart: 10,
              paddingEnd: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: theme.FONTS.default,
                fontSize: 14,
                color: type === 'Select fuel type' ? theme.COLORS.text1 : theme.COLORS.white,
              }}
            >
              {type}
            </Text>
            <InputIcon as={ArrowDownIcon} color={theme.COLORS.text} />
          </TouchableOpacity>
          <InputData
            reference={totalAmountRef}
            placeholder="Total amount paid"
            value={amount.toString()}
            keyType="next"
            onSubmitEditing={() => totalQuantityRef.current?.focus()}
            setValue={(value: string) => setAmount(Number(value))}
            rightIcon={<InputIcon as={Wallet} color={theme.COLORS.text} />}
          />
          <InputData
            reference={totalQuantityRef}
            placeholder="Total quantity"
            value={quantity.toString()}
            keyType="next"
            keyboardType="numeric"
            onSubmitEditing={() => noteRef.current?.focus()}
            setValue={(value: string) => setQuantity(Number(value))}
            rightIcon={<InputIcon as={Droplets} color={theme.COLORS.text} />}
          />
          <InputDataLarge
            reference={noteRef}
            placeholder="Note"
            value={note}
            setValue={setNote}
            keyType="done"
          />
        </VStack>
        <PrimaryBtn title="Add entry" marginHorizontal={16} onPress={onPress} />
        {showDate && <RNDateTimePicker mode="date" value={date} onChange={onDateChange} />}
        {showTime && <RNDateTimePicker mode="time" value={time} onChange={onTimeChange} />}
      </KeyboardAwareScrollView>
      <FuelTypePicker
        onOpen={showFuelPicker}
        onClose={() => setShowFuelPicker(!showFuelPicker)}
        setType={setType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddFuelEntry;
