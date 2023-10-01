import { Button, ButtonText } from '@gluestack-ui/themed';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import React, { type ReactNode } from 'react';

interface Props {
  title: string;
}

const SecondaryBtn = ({ title }: Props): ReactNode => {
  return (
    <Button
      size="xl"
      variant="outline"
      borderColor={colors.borderColor}
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={dimensions.buttonBorder}
    >
      <ButtonText fontFamily={fonts.default} color={colors.text}>
        {title}
      </ButtonText>
    </Button>
  );
};

export default SecondaryBtn;
