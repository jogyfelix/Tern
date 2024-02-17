import React, { useRef, useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import InputDataLarge from '../../components/InputDataLarge';
import PrimaryBtn from '../../components/PrimaryBtn';
import { InputIcon, VStack } from '@gluestack-ui/themed';
import { Building, Car } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopTabBar from '../../components/TopTabBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useKeyboardVisiblity } from '../../utils/useKeyboardVisiblity';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle, vehiclesType } from '../../redux/slices/vehiclesSlice';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddVehicle = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  const [note, setNote] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [make, setMake] = useState('');
  const typeRef = useRef();
  const nameRef = useRef();
  const makeRef = useRef();
  const noteRef = useRef();
  const vehicles = useSelector((state: any) => state.vehicles.vehiclesList);

  const onPress = () => {
    const newId = (vehicles[vehicles.length - 1]?.id ?? 0) + 1;
    const newEntry: vehiclesType = {
      id: newId,
      type,
      name,
      make,
      note,
    };
    dispatch(addVehicle(newEntry));
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
          <InputData
            reference={typeRef}
            value={type}
            setValue={setType}
            keyboardType="default"
            keyType="next"
            onSubmitEditing={() => nameRef.current?.focus()}
            placeholder="Type"
            rightIcon={<InputIcon as={Car} color={theme.COLORS.text} />}
          />
          <InputData
            reference={nameRef}
            value={name}
            setValue={setName}
            keyboardType="default"
            keyType="next"
            onSubmitEditing={() => makeRef.current?.focus()}
            placeholder="Name"
            rightIcon={<InputIcon as={Building} color={theme.COLORS.text} />}
          />
          <InputData
            reference={makeRef}
            value={make}
            setValue={setMake}
            keyboardType="default"
            keyType="next"
            onSubmitEditing={() => noteRef.current?.focus()}
            placeholder="Make"
            rightIcon={<InputIcon as={Building} color={theme.COLORS.text} />}
          />
          <InputDataLarge
            reference={noteRef}
            value={note}
            setValue={setNote}
            keyType="done"
            placeholder="Note"
          />
        </VStack>
        <PrimaryBtn title="Add vehicle" marginHorizontal={16} onPress={onPress} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddVehicle;
