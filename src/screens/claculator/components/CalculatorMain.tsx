import { styled } from '@gluestack-style/react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Divider, HStack } from '@gluestack-ui/themed';
import Calc from '../../../../assets/svg/calculator-abstract.svg';
import React, { type ReactElement } from 'react';
import { theme } from '../../../constants/theme';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import strings from '../../../constants/strings';

interface Props {
  fuelPrice: number;
  sharePerPerson: number;
  numberOfPeople: number;
  totalPrice: number;
  totalQuantity: number;
  currency: string;
  distanceUnit: distanceUnittType;
  scale: SharedValue<any>;
}

const CalculatorMain = ({
  fuelPrice,
  sharePerPerson,
  numberOfPeople,
  totalPrice,
  totalQuantity,
  currency,
  distanceUnit,
  scale,
}: Props): ReactElement => {
  const { height } = useWindowDimensions();

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Parent height={height / 3}>
      <Animated.View style={[{ position: 'absolute', end: 0, top: 0 }, rStyle]}>
        <Calc />
      </Animated.View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <TextComponent fontSize={48} textAlign="center" numberOfLines={1} ellipsizeMode="tail">
          {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
          {totalPrice}
        </TextComponent>
        <TextComponent
          numberOfLines={1}
          ellipsizeMode="tail"
          fontSize={24}
          textAlign="center"
          color={theme.COLORS.text}
        >
          {totalQuantity} {distanceUnit === 'Kilometers' ? 'Liters' : 'Gallons'}
        </TextComponent>
      </View>

      <View
        style={{
          flex: 0.6,
          justifyContent: 'flex-end',
        }}
      >
        <Divider bgColor={theme.COLORS.borderColor} />
        <HStack marginTop={24}>
          <View style={{ flex: 1 }}>
            <TextComponent color={theme.COLORS.text1}>
              {strings.PER} {distanceUnit === 'Kilometers' ? 'liters' : 'gallons'}
            </TextComponent>
            <TextComponent
              numberOfLines={1}
              ellipsizeMode="tail"
              textAlign="center"
              color={theme.COLORS.text}
            >
              {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
              {fuelPrice}
            </TextComponent>
          </View>

          <View style={{ flex: 1 }}>
            <TextComponent color={theme.COLORS.text1}>{strings.EACH_SHARE}</TextComponent>
            <TextComponent
              numberOfLines={1}
              ellipsizeMode="tail"
              textAlign="center"
              color={theme.COLORS.text}
            >
              {currency.startsWith('I') ? '₹' : currency.startsWith('U') ? '$' : '£'}
              {sharePerPerson}
            </TextComponent>
          </View>

          <View style={{ flex: 1 }}>
            <TextComponent color={theme.COLORS.text1}>{strings.PEOPLE}</TextComponent>
            <TextComponent textAlign="center" color={theme.COLORS.text}>
              {numberOfPeople}
            </TextComponent>
          </View>
        </HStack>
      </View>
    </Parent>
  );
};

const Parent = styled(View, {
  backgroundColor: theme.COLORS.cardBg,
  padding: 16,
  borderRadius: 16,
  justifyContent: 'center',
  overflow: 'hidden',
});

const TextComponent = styled(Text, {
  color: theme.COLORS.white,
  fontFamily: theme.FONTS.default,
  textAlign: 'center',
});

export default CalculatorMain;
