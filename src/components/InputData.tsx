import { Input, InputField, InputSlot, VStack } from '@gluestack-ui/themed';
import React, { type ReactElement, MutableRefObject } from 'react';
import { theme } from '../constants/theme';

interface Props {
  reference?: MutableRefObject<any>;
  keyType?: 'next' | 'done';
  placeholder: string;
  rightIcon?: ReactElement;
  value: string;
  setValue: (value: string) => void;
  onSubmitEditing?: () => void;
  keyboardType?: 'decimal-pad' | 'default';
}

const InputData = ({
  reference,
  keyType = 'done',
  placeholder,
  rightIcon,
  value,
  setValue,
  onSubmitEditing,
  keyboardType = 'decimal-pad',
}: Props): ReactElement => {
  const onChange = (text: string): void => {
    if (keyboardType == 'decimal-pad' && isNaN(Number(text))) {
      return;
    }
    setValue(text);
  };

  return (
    <VStack>
      <Input
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        borderWidth={0}
        height={44}
        borderRadius={theme.DIMENSIONS.inputBorder}
      >
        <InputField
          ref={reference}
          color={theme.COLORS.white}
          backgroundColor={theme.COLORS.cardBg1}
          placeholder={placeholder}
          value={value === '0' ? '' : value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          cursorColor={theme.COLORS.primary}
          fontSize={14}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={keyType}
        />

        <InputSlot
          backgroundColor={theme.COLORS.cardBg1}
          paddingEnd={6}
          onPress={() => {
            console.log('clicked');
          }}
        >
          {rightIcon}
        </InputSlot>
      </Input>
    </VStack>
  );
};

export default InputData;
