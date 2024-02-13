import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, VStack } from '@gluestack-ui/themed';
import { Banknote, Fuel, Wallet } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import DateSelector from '../../components/DataSelector';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { addFuelEntry, fuelEntryType } from '../../redux/slices/fuelLedgerSlice';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddFuelEntry = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const dispatch = useDispatch();
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState('');
  const ledger = useSelector((state: any) => state.fuelLedger.ledgerList);

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
    const newId = (ledger[ledger.length - 1].id || 0) + 1;
    const newEntry: fuelEntryType = {
      id: newId,
      type,
      amount,
      quantity,
      date: date.toISOString(),
      time: time.toISOString(),
    };
    dispatch(addFuelEntry(newEntry));
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
          <InputData
            placeholder="Fuel Type"
            value={type}
            setValue={setType}
            keyboardType="default"
            rightIcon={<InputIcon as={Fuel} color={theme.COLORS.text} />}
          />
          <InputData
            placeholder="Total amount"
            value={amount.toString()}
            setValue={(value: string) => setAmount(Number(value))}
            rightIcon={<InputIcon as={Banknote} color={theme.COLORS.text} />}
          />
          <InputData
            placeholder="Total quantity"
            value={quantity.toString()}
            setValue={(value: string) => setQuantity(Number(value))}
            rightIcon={<InputIcon as={Wallet} color={theme.COLORS.text} />}
          />
          <InputDataLarge placeholder="Note" value={note} setValue={setNote} />
        </VStack>
        <PrimaryBtn title="Add entry" marginHorizontal={16} onPress={onPress} />
        {showDate && <RNDateTimePicker mode="date" value={date} onChange={onDateChange} />}
        {showTime && <RNDateTimePicker mode="time" value={time} onChange={onTimeChange} />}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddFuelEntry;
