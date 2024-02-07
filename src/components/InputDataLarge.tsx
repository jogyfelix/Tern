import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';
import React, { type ReactElement, MutableRefObject } from 'react';
import { theme } from '../constants/theme';

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
    <Textarea isDisabled={false} isInvalid={false} isReadOnly={false} borderWidth={0}>
      <TextareaInput
        ref={reference}
        borderRadius={theme.DIMENSIONS.inputBorder}
        color={theme.COLORS.white}
        backgroundColor={theme.COLORS.cardBg1}
        placeholder={placeholder}
        value={value === '0' ? '' : value}
        onChangeText={onChange}
        keyboardType="default"
        cursorColor={theme.COLORS.primary}
        fontSize={14}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={keyType}
      />
    </Textarea>
  );
};

export default InputData;
