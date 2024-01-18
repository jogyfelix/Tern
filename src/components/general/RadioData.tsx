import React, { type Dispatch, type SetStateAction, type ReactElement } from 'react';
import {
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  Radio,
  HStack,
  styled,
} from '@gluestack-ui/themed';
import { CircleIcon } from 'lucide-react-native';
import { Text } from 'react-native';
import { theme } from '../../constants/theme';

interface Props {
  data: string[];
  title: string;
  defaultValue?: string;
  setValue?: Dispatch<SetStateAction<any>>;
  type?: string;
}

const RadioData = ({ data, title, defaultValue = '', setValue, type }: Props): ReactElement => {
  return (
    <RadioGroup
      value={
        type === 'fuel' ? (defaultValue === 'Kilometers' ? 'Liters' : 'Gallons') : defaultValue
      }
      onChange={setValue}
    >
      <Title>{title} :</Title>
      <HStack space="xl">
        {data.map((value, index) => {
          return (
            <Radio value={value} key={index} size="sm" isDisabled={type === 'fuel'}>
              <RadioIndicator borderColor={theme.COLORS.text1}>
                <RadioIcon as={CircleIcon} fill={theme.COLORS.primary} />
              </RadioIndicator>
              <RadioLabel
                marginStart={4}
                fontFamily={theme.FONTS.default}
                color={theme.COLORS.text}
                fontSize={16}
              >
                {value}
              </RadioLabel>
            </Radio>
          );
        })}
      </HStack>
    </RadioGroup>
  );
};

const Title = styled(Text, {
  fontFamily: theme.FONTS.default,
  color: theme.COLORS.white,
  fontSize: 20,
  marginBottom: 12,
});

export default React.memo(RadioData);
