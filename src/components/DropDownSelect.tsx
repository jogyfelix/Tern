import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';
import { InputIcon } from '@gluestack-ui/themed';
import { ArrowDownIcon } from 'lucide-react-native';

type props = {
  onPress: () => void;
  text: string;
  color: string;
};

const DropDownSelect = ({ onPress, text, color }: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 52,
        borderRadius: theme.DIMENSIONS.inputBorder,
        backgroundColor: theme.COLORS.cardBg1,
        justifyContent: 'space-between',
        paddingStart: 10,
        paddingEnd: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: theme.FONTS.default,
          fontSize: 14,
          color: color,
        }}
      >
        {text}
      </Text>
      <InputIcon as={ArrowDownIcon} color={theme.COLORS.text} />
    </TouchableOpacity>
  );
};

export default DropDownSelect;
