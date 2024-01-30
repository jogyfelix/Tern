import { HStack, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import Scooter from '../../../../assets/svg/scooter.svg';
import Ledger from '../../../../assets/svg/ledger.svg';

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
        <VStack alignItems="flex-start" flex={1}>
          <Text style={styles.title}>
            {type == 'garage' ? 'Add your first vehicle' : 'Add your first fuel entry'}
          </Text>
          <Text style={styles.subTitle}>
            {type == 'garage'
              ? 'Lorem ipsum dolor sit amet, consectetur adipisci.'
              : 'Lorem ipsum dolor sit amet, consectetur adipisci.'}
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
  icon: { marginEnd: 24 },
});

export default EmptyCard;
