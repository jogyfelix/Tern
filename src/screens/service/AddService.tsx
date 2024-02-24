import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, VStack } from '@gluestack-ui/themed';
import { Building, Car } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import DateSelector from '../../components/DataSelector';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { addService, serviceType } from '../../redux/slices/servicesSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { vehicleId: number; vehicleName: string } }>;
}

const AddService = ({ navigation, route }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [note, setNote] = useState('');
  const [service, setService] = useState('');
  const [odometer, setOdometer] = useState('');
  const dispatch = useDispatch();
  const serviceList = useSelector((state: any) => state.services.services);

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
    const newId = (serviceList[serviceList.length - 1]?.id ?? 0) + 1;
    const newEntry: serviceType = {
      id: newId,
      vehicleId: route.params.vehicleId,
      vehicleName: route.params.vehicleName,
      service,
      odometer,
      status: 'upcoming',
      nextServiceDate: date.toISOString(),
      nextServiceTime: time.toISOString(),
      addedDate: new Date().toISOString(),
      note,
    };
    dispatch(addService(newEntry));
  };

  return (
    <View style={styles.container}>
      <TopTabBar
        title="Add a Service"
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
            placeholder="Service Type"
            keyboardType="default"
            value={service}
            setValue={setService}
            rightIcon={<InputIcon as={Car} color={theme.COLORS.text} />}
          />
          <InputData
            placeholder="Odometer"
            keyboardType="decimal-pad"
            value={odometer}
            setValue={setOdometer}
            rightIcon={<InputIcon as={Car} color={theme.COLORS.text} />}
          />
          <InputDataLarge placeholder="Note" value={note} setValue={setNote} keyType="done" />
        </VStack>
        <PrimaryBtn title="Add Service" marginHorizontal={16} onPress={onPress} />
        {showDate && (
          <RNDateTimePicker
            minimumDate={new Date()}
            mode="date"
            value={date}
            onChange={onDateChange}
          />
        )}
        {showTime && (
          <RNDateTimePicker
            minimumDate={new Date()}
            mode="time"
            value={time}
            onChange={onTimeChange}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddService;
