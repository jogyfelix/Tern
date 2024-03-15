import React, { useRef, useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, Toast, ToastDescription, VStack, useToast } from '@gluestack-ui/themed';
import { Building, Calendar, CalendarCheck, Car, CarFront, Gauge } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle, vehiclesType } from '../../redux/slices/vehiclesSlice';
import DropDownSelect from '../../components/DropDownSelect';
import VehicleTypePicker from './components/VehicleTypePicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import strings from '../../constants/strings';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddVehicle = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const [type, setType] = useState('Select vehicle type');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [odometer, setOdometer] = useState('');
  const [showType, setShowType] = useState(false);
  const yearRef = useRef();
  const modelRef = useRef();
  const odometerRef = useRef();
  const vehicles = useSelector((state: any) => state.vehicles.vehiclesList);
  const toast = useToast();

  const onPress = () => {
    if (type != 'Select vehicle type' && year != '' && model != '' && odometer != '') {
      const newId = (vehicles[vehicles.length - 1]?.id ?? 0) + 1;
      const newEntry: vehiclesType = {
        id: newId,
        type,
        model,
        year,
        odometerReading: odometer,
      };
      dispatch(addVehicle(newEntry));
      navigation.goBack();
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="info" variant="solid" bg={theme.COLORS.cardBg}>
              <VStack space="xs">
                <ToastDescription color={theme.COLORS.text}>
                  Vehicle added successfully
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
        title="Add Vehicle"
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
          <DropDownSelect
            onPress={() => setShowType(true)}
            text={type}
            color={type === 'Select vehicle type' ? theme.COLORS.text1 : theme.COLORS.white}
          />
          <InputData
            reference={yearRef}
            value={year}
            setValue={setYear}
            keyboardType="decimal-pad"
            keyType="next"
            onSubmitEditing={() => modelRef.current?.focus()}
            placeholder="Year of manufacture"
            rightIcon={<InputIcon as={Calendar} color={theme.COLORS.text} />}
          />
          <InputData
            reference={modelRef}
            value={model}
            setValue={setModel}
            keyboardType="default"
            keyType="next"
            onSubmitEditing={() => odometerRef.current?.focus()}
            placeholder="Model"
            rightIcon={<InputIcon as={CarFront} color={theme.COLORS.text} />}
          />
          <InputData
            reference={odometerRef}
            value={odometer}
            setValue={setOdometer}
            keyboardType="decimal-pad"
            keyType="done"
            placeholder="Odometer reading"
            rightIcon={<InputIcon as={Gauge} color={theme.COLORS.text} />}
          />
        </VStack>
        <PrimaryBtn title="Add vehicle" marginHorizontal={16} onPress={onPress} />
      </KeyboardAwareScrollView>
      <VehicleTypePicker
        onOpen={showType}
        onClose={() => setShowType(!showType)}
        setType={setType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddVehicle;
