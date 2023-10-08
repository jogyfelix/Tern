import {Button, ButtonText} from '@gluestack-ui/themed';
import React, {type ReactElement} from 'react';
import {theme} from '../../constants/theme';

interface Props {
  onPress: () => void;
}

const PrimaryBtn = ({onPress}: Props): ReactElement => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={theme.DIMENSIONS.buttonBorder}
      bg={theme.COLORS.secondary}
      onPress={onPress}>
      <ButtonText fontFamily={theme.FONTS.default}>Calculate</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
