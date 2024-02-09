import React from 'react';
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

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddVehicle = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
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
            placeholder="Type"
            rightIcon={<InputIcon as={Car} color={theme.COLORS.text} />}
          />
          <InputData
            placeholder="Make"
            rightIcon={<InputIcon as={Building} color={theme.COLORS.text} />}
          />
          <InputDataLarge placeholder="Note" />
        </VStack>
        <PrimaryBtn title="Add vehicle" marginHorizontal={16} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' },
});

export default AddVehicle;
