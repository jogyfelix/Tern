import { HStack, Icon } from '@gluestack-ui/themed';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { Calendar } from 'lucide-react-native';

const DateSelector = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack alignItems="center" gap={10}>
        <View style={styles.container}>
          <Icon as={Calendar} color={theme.COLORS.text} />
        </View>
        <Text style={styles.month}>February 2</Text>
      </HStack>
      <HStack
        alignItems="center"
        gap={6}
        backgroundColor={theme.COLORS.cardBg}
        padding={12}
        borderRadius={8}
      >
        <Text style={styles.text}>11</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>38</Text>
        <Text style={styles.text}>PM</Text>
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.cardBg,
    padding: 12,
    borderRadius: 14,
  },
  month: { color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 20 },
  text: { color: theme.COLORS.text, fontFamily: theme.FONTS.default, fontSize: 16 },
});

export default DateSelector;
