import React from 'react';
import { View, StatusBar, useWindowDimensions } from 'react-native';
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

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const AddFuelEntry = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const isKeyboardVisible = useKeyboardVisiblity();
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.black, justifyContent: 'space-between' }}>
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
          <DateSelector />
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddFuelEntry;
