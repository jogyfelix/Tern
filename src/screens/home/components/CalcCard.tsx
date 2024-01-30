import { HStack, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

type props = {
  onPress: () => void;
};

const CalcCard = ({ onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.COLORS.cardBg}
        padding={16}
        borderRadius={theme.DIMENSIONS.cardBorder}
      >
        <Text style={styles.title}>Fuel Calculator</Text>
        <VStack alignItems="center">
          <Text style={styles.cost}>$160</Text>
          <Text style={styles.date}>14 Jan</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  title: { fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 18 },
  cost: { fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 16 },
  date: { fontFamily: theme.FONTS.default, color: theme.COLORS.text1, fontSize: 16 },
});

export default CalcCard;
