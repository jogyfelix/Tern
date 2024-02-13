import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, VStack } from '@gluestack-ui/themed';
import { Banknote, Wallet } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import DateSelector from '../../components/DataSelector';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddFuelEntry = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const datePress = () => {
    setShowDate(true);
  };

  const timePress = () => {
    setShowTime(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDate(false);
    setDate(selectedDate);
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTime(false);
    setTime(selectedTime);
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
        contentContainerStyle={{ justifyContent: 'space-between', height: height / 1.2 - 200 }}
      >
        <VStack gap={28} marginTop={28} marginHorizontal={16}>
          <DateSelector datePress={datePress} timePress={timePress} date={date} time={time} />
          <InputData
            placeholder="Cost"
            rightIcon={<InputIcon as={Banknote} color={theme.COLORS.text} />}
          />
          <InputData
            placeholder="Total amount"
            rightIcon={<InputIcon as={Wallet} color={theme.COLORS.text} />}
          />
          <InputDataLarge placeholder="Note" />
        </VStack>
        <PrimaryBtn title="Add entry" marginHorizontal={16} />
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
