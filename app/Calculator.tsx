import React, { type ReactNode, useLayoutEffect, useState } from 'react';
import ParentView from '../components/general/ParentView';
import CalculatorMain from '../components/calculator/CalculatorMain';
import InputData from '../components/general/InputData';
import PrimaryBtn from '../components/general/PrimaryBtn';
import SliderData from '../components/general/SliderData';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Icon,
  VStack,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  Radio,
  HStack,
} from '@gluestack-ui/themed';
import { useNavigation } from 'expo-router';
import colors from '../constants/colors';
import { Pressable } from 'react-native';
import { CircleIcon, Menu } from 'lucide-react-native';

const Calculator = (): ReactNode => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            setShowMenu(true);
          }}
        >
          <Icon as={Menu} color={colors.white} size="lg" />
        </Pressable>
      ),
    });
  }, []);
  return (
    <ParentView type="space-between">
      <CalculatorMain />
      <VStack space="lg">
        <InputData title="Fuel Price" placeholder="Fuel price (per liter/gallon)" />
        <InputData title="Distance" placeholder="Total distance (miles/kilometers)" />
        <SliderData />
      </VStack>
      <PrimaryBtn />
      <Actionsheet
        isOpen={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        zIndex={999}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent zIndex={999} bgColor={colors.cardBg} alignItems="flex-start">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <RadioGroup>
            <HStack space="2xl" backgroundColor="red">
              <Radio value="Credit Card">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Credit Card</RadioLabel>
              </Radio>
              <Radio value="Cash On Delivery">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Cash On Delivery</RadioLabel>
              </Radio>
            </HStack>
          </RadioGroup>
        </ActionsheetContent>
      </Actionsheet>
    </ParentView>
  );
};

export default Calculator;
