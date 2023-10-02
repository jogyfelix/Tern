import React, { type Dispatch, type SetStateAction, type ReactElement } from 'react';
import { RadioGroup, RadioIndicator, RadioLabel, RadioIcon, Radio, HStack, styled } from '@gluestack-ui/themed';
import { CircleIcon } from 'lucide-react-native';
import { Text } from 'react-native';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

interface Props {
  data: string[];
  title: string;
  defaultValue: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const RadioData = ({ data, title, defaultValue = '', setValue }: Props): ReactElement => {
  return (
    <RadioGroup value={defaultValue} onChange={setValue}>
      <Title>{title} :</Title>
      <HStack space="xl">
        {data.map((value, index) => {
          return (
            <Radio value={value} key={index} size="sm">
              <RadioIndicator borderColor={colors.text1}>
                <RadioIcon as={CircleIcon} fill={colors.primary} />
              </RadioIndicator>
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

const Title = styled(Text, { fontFamily: fonts.default, color: colors.white, fontSize: 20, marginBottom: 12 });

export default React.memo(RadioData);
