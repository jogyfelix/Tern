import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../../../constants/theme';
import strings from '../../../constants/strings';
import { Fuel } from 'lucide-react-native';

type props = {
  lastSum: string;
  lastDate: string;
  onPress: () => void;
};

const CalcCard = ({ lastSum, lastDate, onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.COLORS.cardBg}
        paddingHorizontal={16}
        paddingVertical={16}
        borderRadius={theme.DIMENSIONS.cardBorder}
      >
        <HStack alignItems="center" gap={12}>
          <View style={{ padding: 18, backgroundColor: theme.COLORS.black, borderRadius: 28 }}>
            <Icon as={Fuel} color={theme.COLORS.secondary} size="xl" />
          </View>

          <Text style={styles.title}>{strings.FUEL_CALCULATOR}</Text>
        </HStack>

        <VStack alignItems="center">
          <Text style={styles.cost}>{lastSum}</Text>
          <Text style={styles.date}>{lastDate}</Text>
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
