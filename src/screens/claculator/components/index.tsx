import { Badge, BadgeText, Icon } from '@gluestack-ui/themed';
import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { theme } from '../../../constants/theme';
import strings from '../../../constants/strings';
import { Menu } from 'lucide-react-native';

export const TopMenu = (onPress: () => void) => {
  return (
    <Pressable onPress={onPress}>
      <Icon as={Menu} color={theme.COLORS.white} size="lg" />
    </Pressable>
  );
};

export const AddPeople = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Badge
        size="lg"
        variant="solid"
        borderRadius={8}
        action="info"
        alignSelf="center"
        bg={theme.COLORS.cardBg}
        padding={6}
      >
        <BadgeText
          fontFamily={theme.FONTS.default}
          fontSize={12}
          color={theme.COLORS.text}
          textTransform="none"
          textAlign="center"
        >
          {strings.ADD_PEOPLE}
        </BadgeText>
      </Badge>
    </TouchableOpacity>
  );
};
