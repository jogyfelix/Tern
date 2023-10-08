import {Button, ButtonText} from '@gluestack-ui/themed';
import React, {type ReactNode} from 'react';
import {theme} from '../../constants/theme';

interface Props {
  title: string;
}

const SecondaryBtn = ({title}: Props): ReactNode => {
  return (
    <Button
      size="xl"
      variant="outline"
      borderColor={theme.COLORS.borderColor}
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={theme.DIMENSIONS.buttonBorder}>
      <ButtonText fontFamily={theme.FONTS.default} color={theme.COLORS.text}>
        {title}
      </ButtonText>
    </Button>
  );
};

export default SecondaryBtn;
