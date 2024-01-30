import { Icon } from '@gluestack-ui/themed';
import React from 'react';
import { Pressable, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import strings from '../../../constants/strings';
import { Menu } from 'lucide-react-native';

export const TopMenu = (onPress: () => void) => {
  return (
    <Pressable onPress={onPress} style={{ marginEnd: 16 }}>
      <Icon as={Menu} color={theme.COLORS.white} size="lg" />
    </Pressable>
  );
};

export const AddPeople = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.addPeopleBtn}>
      <Text style={styles.addPeopleTxt}>{strings.ADD_PEOPLE}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addPeopleBtn: {
    borderRadius: 8,
    backgroundColor: theme.COLORS.cardBg,
    padding: 6,
    alignSelf: 'center',
  },
  addPeopleTxt: {
    fontFamily: theme.FONTS.default,
    fontSize: 12,
    color: theme.COLORS.text,
    textAlign: 'center',
  },
});
