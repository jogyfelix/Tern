import React, { type ReactNode } from 'react';
import { theme } from '../../constants/theme';
import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

interface Props {
  title: string;
  onPress: () => void;
}

const TextBtn = ({ title, onPress }: Props): ReactNode => {
  return (
    <Pressable onPress={onPress} hitSlop={4}>
      <ButtonText>{title}</ButtonText>
    </Pressable>
  );
};

const ButtonText = styled(Text, {
  color: theme.COLORS.text1,
  fontFamily: theme.FONTS.default,
  fontSize: 18,

  marginStart: 8,
  textAlign: 'center',
});

export default TextBtn;
