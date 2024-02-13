import { HStack, Icon } from '@gluestack-ui/themed';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { Calendar } from 'lucide-react-native';
import moment from 'moment';

type Props = {
  datePress: () => void;
  timePress: () => void;
  date: Date;
  time: Date;
};

const DateSelector = ({ datePress, timePress, date, time }: Props) => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack alignItems="center" gap={10} onTouchEnd={datePress}>
        <View style={styles.container}>
          <Icon as={Calendar} color={theme.COLORS.text} />
        </View>
        <Text style={styles.month}>{moment(date).format('MMMM DD')}</Text>
      </HStack>
      <HStack
        alignItems="center"
        gap={6}
        backgroundColor={theme.COLORS.cardBg}
        padding={12}
        borderRadius={8}
        onTouchEnd={timePress}
      >
        <Text style={styles.text}>{moment(time).format('h : mm A')}</Text>
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
