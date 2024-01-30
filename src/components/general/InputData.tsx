import { Input, InputField, InputIcon, InputSlot, VStack } from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';
import React, { type ReactElement, MutableRefObject } from 'react';
import { theme } from '../../constants/theme';

interface Props {
  reference?: MutableRefObject<any>;
  keyType?: 'next' | 'done';
  placeholder: string;
  enableMenu?: boolean;
  value: string;
  setValue: (value: string) => void;
  onSubmitEditing?: () => void;
}

const InputData = ({
  reference,
  keyType = 'done',
  placeholder,
  enableMenu = false,
  value,
  setValue,
  onSubmitEditing,
}: Props): ReactElement => {
  const onChange = (text: string): void => {
    if (isNaN(Number(text))) {
      return;
    }
    setValue(text);
  };

  return (
    <VStack space="sm">
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        borderWidth={0}
        borderRadius={theme.DIMENSIONS.inputBorder}
      >
        <InputField
          ref={reference}
          color={theme.COLORS.white}
          bg={theme.COLORS.cardBg1}
          placeholder={placeholder}
          paddingStart={4}
          paddingVertical={0}
          value={value === '0' ? '' : value}
          onChangeText={onChange}
          keyboardType="decimal-pad"
          cursorColor={theme.COLORS.primary}
          fontSize={14}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={keyType}
        />
        {enableMenu && (
          <InputSlot
            bg={theme.COLORS.cardBg1}
            paddingEnd={6}
            onPress={() => {
              console.log('clicked');
            }}
          >
            <InputIcon as={Menu} color={theme.COLORS.text} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};

export default InputData;
