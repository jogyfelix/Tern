import React, { type Dispatch, type SetStateAction, type ReactElement, useMemo } from 'react';
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  distanceUnit: string;
  fuelUnit: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  setDistanceUnit: Dispatch<SetStateAction<string>>;
  setFuelUnit: Dispatch<SetStateAction<string>>;
}

const CalculatorSettings = ({
  isOpen,
  onClose,
  currency,
  distanceUnit,
  fuelUnit,
  setCurrency,
  setDistanceUnit,
  setFuelUnit,
}: Props): ReactElement => {
  const MemoizedCurrency = useMemo(() => {
    return <RadioData data={['IND (₹)', 'USD ($)', 'GBP (£)']} title="Currency" defaultValue={currency} setValue={setCurrency} />;
  }, [currency]);
  const MemoizedDistance = useMemo(() => {
    return <RadioData data={['Miles', 'Kilometers']} title="Distance Unit" defaultValue={distanceUnit} setValue={setDistanceUnit} />;
  }, [distanceUnit]);
  const MemoizedFuel = useMemo(() => {
    return <RadioData data={['Liters', 'Gallons']} title="Fuel Unit" defaultValue={fuelUnit} setValue={setFuelUnit} />;
  }, [fuelUnit]);
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} bgColor={colors.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <VStack space="4xl" w={'100%'} padding={16}>
          {MemoizedCurrency}
          {MemoizedDistance}
          {MemoizedFuel}
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default CalculatorSettings;
