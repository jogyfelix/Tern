import { Button, ButtonText } from '@gluestack-ui/themed';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import React, { type ReactElement } from 'react';

interface Props {
  onPress: () => void;
}

const PrimaryBtn = ({ onPress }: Props): ReactElement => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={dimensions.buttonBorder}
      bg={colors.secondary}
      onPress={onPress}
    >
      <ButtonText fontFamily={fonts.default}>Calculate</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
