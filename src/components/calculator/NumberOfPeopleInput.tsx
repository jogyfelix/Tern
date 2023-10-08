import React, {type ReactElement} from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  VStack,
} from '@gluestack-ui/themed';
import InputData from '../general/InputData';
import {theme} from '../../constants/theme';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  setValue: (value: string) => void;
}

const NumberOfPeopleInput = ({
  isOpen,
  onClose,
  value,
  setValue,
}: Props): ReactElement => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack
          space="4xl"
          w={'100%'}
          paddingHorizontal={16}
          paddingTop={16}
          paddingBottom={48}>
          <InputData
            title="Number of People"
            placeholder="Enter number of people"
            value={value}
            setValue={setValue}
          />
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default NumberOfPeopleInput;
