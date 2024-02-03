import { HStack, Icon } from '@gluestack-ui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { Calendar } from 'lucide-react-native';

const DateSelector = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack alignItems="center" gap={10}>
        <View
          style={{
            backgroundColor: theme.COLORS.cardBg,
            padding: 12,
            borderRadius: 14,
          }}
        >
          <Icon as={Calendar} color={theme.COLORS.text} />
        </View>
        <Text style={{ color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 20 }}>
          February 2
        </Text>
      </HStack>
      <HStack
        alignItems="center"
        gap={6}
        backgroundColor={theme.COLORS.cardBg}
        padding={12}
        borderRadius={8}
      >
        <Text style={{ color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 16 }}>
          11
        </Text>
        <Text style={{ color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 16 }}>
          :
        </Text>
        <Text style={{ color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 16 }}>
          38
        </Text>
        <Text style={{ color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 16 }}>
          PM
        </Text>
      </HStack>
    </HStack>
  );
};

export default DateSelector;
