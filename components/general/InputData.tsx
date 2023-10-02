import { Input, InputField, InputIcon, InputSlot, VStack } from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';
import { Text } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import dimensions from '../../constants/dimensions';
import React, { type ReactElement } from 'react';

interface Props {
  title: string;
  placeholder: string;
  enableMenu?: boolean;
  value: string;
  setValue: (value: string) => void;
}

const InputData = ({ title, placeholder, enableMenu = false, value, setValue }: Props): ReactElement => {
  return (
    <VStack space="sm">
      <Text
        style={{
          color: colors.white,
          fontFamily: fonts.default,
        }}
      >
        {title}
      </Text>
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        borderColor={colors.borderColor}
        borderRadius={dimensions.inputBorder}
      >
        <InputField
          color={colors.white}
          bg={colors.cardBg1}
          placeholder={placeholder}
          paddingStart={4}
          value={value === '0' ? '' : value}
          onChangeText={setValue}
          keyboardType="number-pad"
          cursorColor={colors.primary}
        />
        {enableMenu && (
          <InputSlot
            bg={colors.cardBg1}
            paddingEnd={6}
            onPress={() => {
              console.log('clicked');
            }}
          >
            <InputIcon as={Menu} color={colors.text} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};

export default InputData;
