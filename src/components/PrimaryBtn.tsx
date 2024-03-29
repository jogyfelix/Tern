import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { type ReactElement } from 'react';
import { theme } from '../constants/theme';

interface Props {
  title: string;
  onPress: () => void;
  marginVertical?: number;
  marginHorizontal?: number;
}

const PrimaryBtn = ({
  title,
  onPress,
  marginVertical = 0,
  marginHorizontal = 0,
}: Props): ReactElement => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={theme.DIMENSIONS.buttonBorder}
      bg={theme.COLORS.secondary}
      onPress={onPress}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
    >
      <ButtonText fontFamily={theme.FONTS.default}>{title}</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
