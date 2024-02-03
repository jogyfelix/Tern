import React, { type ReactNode } from 'react';
import { theme } from '../constants/theme';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Google from '../../assets/svg/google.svg';

interface Props {
  title: string;
  onPress: () => void;
}

const SocialAuthBtn = ({ title, onPress }: Props): ReactNode => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Google />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 34,
  },
  text: {
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.default,
    fontSize: 16,
    fontWeight: 'bold',
    marginStart: 8,
  },
});

export default SocialAuthBtn;
