import React, { type Dispatch, type SetStateAction, type ReactNode } from 'react';
import { RadioGroup, RadioIndicator, RadioLabel, RadioIcon, Radio, HStack } from '@gluestack-ui/themed';
import { Circle } from 'lucide-react-native';
import { Text } from 'react-native';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

interface Props {
  data: string[];
  title: string;
  setSettings: Dispatch<SetStateAction<string[]>>;
}

const RadioData = ({ data, title, setSettings }: Props): ReactNode => {
  return (
    <RadioGroup>
      <Text style={{ fontFamily: fonts.default, color: colors.white, fontSize: 20, marginBottom: 12 }}>{title} :</Text>
      <HStack space="xl">
        {data.map((value, index) => {
          return (
            <Radio
              value={value}
              onChange={(isSelected) => {
                console.log(value, 'selected');
              }}
              key={index}
              size="sm"
            >
              <RadioIndicator></RadioIndicator>
              <RadioLabel marginStart={4} fontFamily={fonts.default} color={colors.text} fontSize={16}>
                {value}
              </RadioLabel>
            </Radio>
          );
        })}
      </HStack>
    </RadioGroup>
  );
};

export default RadioData;
