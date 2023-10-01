import React, { type Dispatch, type SetStateAction, type ReactNode } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  VStack,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
} from '@gluestack-ui/themed';
import colors from '../../constants/colors';
import RadioData from '../general/RadioData';
import SecondaryBtn from '../general/SecondaryBtn';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setSettings: Dispatch<SetStateAction<string[]>>;
}

const CalculatorSettings = ({ isOpen, onClose, setSettings }: Props): ReactNode => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} bgColor={colors.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack space="4xl" w={'100%'} flex={1} padding={16}>
          <VStack space="4xl" marginBottom={24}>
            <RadioData data={['IND (₹)', 'USD ($)', 'GBP (£)']} title="Currency" />
            <RadioData data={['Miles', 'Kilometers']} title="Distance Unit" />
            <RadioData data={['Liters', 'Gallons']} title="Fuel Unit" />
          </VStack>
          <SecondaryBtn title="Save" />
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default CalculatorSettings;
