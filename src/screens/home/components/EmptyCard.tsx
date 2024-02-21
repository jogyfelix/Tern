import { HStack, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import Scooter from '../../../../assets/svg/scooter.svg';
import Ledger from '../../../../assets/svg/ledger.svg';
import strings from '../../../constants/strings';

type props = {
  type: 'garage' | 'ledger';
  onPress: () => void;
};

const EmptyCard = ({ type, onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.COLORS.cardBg}
        padding={16}
        borderRadius={theme.DIMENSIONS.cardBorder}
      >
        <VStack alignItems="flex-start" flex={2}>
          <Text style={styles.title}>
            {type == 'garage' ? strings.ADD_NEW_VEHICLE : strings.RECORD_FUEL_EXPENSES}
          </Text>
          <Text style={styles.subTitle}>
            {type == 'garage' ? strings.ADD_VEHICLE_SUB_TITLE : strings.ADD_FUEL_SUB_TITLE}
          </Text>
        </VStack>
        <View style={styles.icon}>{type == 'garage' ? <Scooter /> : <Ledger />}</View>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  title: {
    fontFamily: theme.FONTS.default,
    color: theme.COLORS.text,
    fontSize: 18,
  },
  subTitle: { fontFamily: theme.FONTS.default, color: theme.COLORS.text1, fontSize: 16 },
  icon: { flex: 1, alignItems: 'center' },
});

export default EmptyCard;
