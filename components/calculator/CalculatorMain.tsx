import { styled } from '@gluestack-style/react';
import { Text, View, useWindowDimensions } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { Divider, HStack } from '@gluestack-ui/themed';
import Calc from '../../assets/svg/calculator-abstract.svg';
import React, { type ReactElement } from 'react';

interface Props {
  fuelPrice: number;
  sharePerPerson: number;
  numberOfPeople: number;
  totalPrice: number;
  totalQuantity: number;
  currency: string;
  distanceUnit: string;
  fuelUnit: string;
}

const CalculatorMain = ({
  fuelPrice,
  sharePerPerson,
  numberOfPeople,
  totalPrice,
  totalQuantity,
  currency,
  distanceUnit,
  fuelUnit,
}: Props): ReactElement => {
  const { height } = useWindowDimensions();
  return (
    <Parent height={height / 2.8}>
      <View style={{ position: 'absolute', end: 0, top: 0 }}>
        <Calc />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <TextComponent fontSize={48} textAlign="center">
          {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
          {totalPrice}
        </TextComponent>
        <TextComponent fontSize={24} textAlign="center" color={colors.text}>
          {totalQuantity}
          {fuelUnit}
        </TextComponent>
      </View>

      <View
        style={{
          flex: 0.6,
          justifyContent: 'flex-end',
        }}
      >
        <Divider bgColor={colors.borderColor} />
        <HStack justifyContent="space-between" marginTop={24}>
          <View>
            <TextComponent color={colors.text1}>per {fuelUnit === 'Gallons' ? 'Gallon' : fuelUnit}</TextComponent>
            <TextComponent textAlign="center" color={colors.text}>
              {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
              {fuelPrice}
            </TextComponent>
          </View>

          <View>
            <TextComponent color={colors.text1}>Each Share</TextComponent>
            <TextComponent textAlign="center" color={colors.text}>
              {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
              {sharePerPerson}
            </TextComponent>
          </View>

          <View>
            <TextComponent color={colors.text1}>People</TextComponent>
            <TextComponent textAlign="center" color={colors.text}>
              {numberOfPeople}
            </TextComponent>
          </View>
        </HStack>
      </View>
    </Parent>
  );
};

const Parent = styled(View, {
  backgroundColor: colors.cardBg,
  padding: 16,
  borderRadius: 16,
  justifyContent: 'center',
});

const TextComponent = styled(Text, {
  color: colors.white,
  fontFamily: fonts.default,
  textAlign: 'center',
});

export default CalculatorMain;
