import {
  Badge,
  BadgeText,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@gluestack-ui/themed';
import { Pressable, Text, View } from 'react-native';
import React, { type Dispatch, type SetStateAction, type ReactElement } from 'react';
import { theme } from '../constants/theme';

interface Props {
  setValue: Dispatch<SetStateAction<number>>;
  setCustom: Dispatch<SetStateAction<boolean>>;
}

const SliderData = ({ setValue, setCustom }: Props): ReactElement => {
  return (
    <VStack space="sm">
      <Text
        style={{
          color: theme.COLORS.white,
          fontFamily: theme.FONTS.default,
        }}
      >
        Number of People
      </Text>
      <View
        style={{
          backgroundColor: theme.COLORS.cardBg1,
          paddingTop: 24,
          paddingBottom: 8,
          paddingHorizontal: 16,
          borderRadius: theme.DIMENSIONS.inputBorder,
          borderWidth: 1,
          borderColor: theme.COLORS.borderColor,
        }}
      >
        <Slider
          onChange={(number) => {
            setValue(number);
          }}
          defaultValue={1}
          minValue={1}
          maxValue={10}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack bg={theme.COLORS.secondary} />
          </SliderTrack>
          <SliderThumb bg={theme.COLORS.secondary} />
        </Slider>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text style={{ color: theme.COLORS.text1 }}>1</Text>
          <Text style={{ color: theme.COLORS.text1 }}>5</Text>
          <Text style={{ color: theme.COLORS.text1 }}>10</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setCustom(true);
        }}
      >
        <Badge
          size="lg"
          variant="solid"
          borderRadius={8}
          action="info"
          alignSelf="flex-start"
          bg={theme.COLORS.cardBg}
          padding={6}
        >
          <BadgeText
            fontFamily={theme.FONTS.default}
            color={theme.COLORS.text}
            textTransform="none"
          >
            Custom
          </BadgeText>
        </Badge>
      </Pressable>
    </VStack>
  );
};

export default SliderData;
