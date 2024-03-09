import React from 'react';
import { Divider, HStack, Icon, VStack } from '@gluestack-ui/themed';
import { theme } from '../../../constants/theme';
import { Text } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const EditSettings = () => {
  return (
    <VStack style={{ backgroundColor: theme.COLORS.cardBg1, padding: 12, borderRadius: 12 }}>
      <HStack justifyContent="space-between">
        <Text
          style={{
            fontFamily: theme.FONTS.default,
            color: theme.COLORS.text,
            fontSize: 18,
            marginVertical: 16,
          }}
        >
          Curerncy
        </Text>
        <HStack alignItems="center" gap={8}>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text1,
              fontSize: 16,
            }}
          >
            Rupee
          </Text>
          <Icon as={ArrowRight} color={theme.COLORS.text1} marginTop={4} />
        </HStack>
      </HStack>
      <Divider
        backgroundColor={theme.COLORS.cardBg}
        w={'$2/3'}
        marginVertical={10}
        alignSelf="center"
      />
      <HStack justifyContent="space-between">
        <Text
          style={{
            fontFamily: theme.FONTS.default,
            color: theme.COLORS.text,
            fontSize: 18,
            marginVertical: 16,
          }}
        >
          Distance Unit
        </Text>
        <HStack alignItems="center" gap={8}>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text1,
              fontSize: 16,
            }}
          >
            Kilometer
          </Text>
          <Icon as={ArrowRight} color={theme.COLORS.text1} marginTop={4} />
        </HStack>
      </HStack>
      <Divider
        backgroundColor={theme.COLORS.cardBg}
        w={'$2/3'}
        marginVertical={10}
        alignSelf="center"
      />
      <HStack justifyContent="space-between">
        <Text
          style={{
            fontFamily: theme.FONTS.default,
            color: theme.COLORS.text,
            fontSize: 18,
            marginVertical: 16,
          }}
        >
          Fuel Unit
        </Text>
        <HStack alignItems="center" gap={8}>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text1,
              fontSize: 16,
            }}
          >
            Liter
          </Text>
          <Icon as={ArrowRight} color={theme.COLORS.text1} marginTop={4} />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default EditSettings;
