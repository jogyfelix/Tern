import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import {Menu} from 'lucide-react-native';
import {Text} from 'react-native';
import React, {type ReactElement} from 'react';
import {theme} from '../../constants/theme';

interface Props {
  title: string;
  placeholder: string;
  enableMenu?: boolean;
  value: string;
  setValue: (value: string) => void;
}

const InputData = ({
  title,
  placeholder,
  enableMenu = false,
  value,
  setValue,
}: Props): ReactElement => {
  const onChange = (text: string): void => {
    if (isNaN(text)) {
      return;
    }
    setValue(text);
  };

  return (
    <VStack space="sm">
      <Text
        style={{
          color: theme.COLORS.white,
          fontFamily: theme.FONTS.default,
        }}>
        {title}
      </Text>
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        borderColor={theme.COLORS.borderColor}
        borderRadius={theme.DIMENSIONS.inputBorder}>
        <InputField
          color={theme.COLORS.white}
          bg={theme.COLORS.cardBg1}
          placeholder={placeholder}
          paddingStart={4}
          paddingVertical={0}
          value={value === '0' ? '' : value}
          onChangeText={onChange}
          keyboardType="decimal-pad"
          cursorColor={theme.COLORS.primary}
        />
        {enableMenu && (
          <InputSlot
            bg={theme.COLORS.cardBg1}
            paddingEnd={6}
            onPress={() => {
              console.log('clicked');
            }}>
            <InputIcon as={Menu} color={theme.COLORS.text} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};

export default InputData;
