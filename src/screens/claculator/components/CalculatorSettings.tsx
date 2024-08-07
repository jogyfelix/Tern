import React, { type Dispatch, type SetStateAction, type ReactElement, useMemo } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  VStack,
} from '@gluestack-ui/themed';
import RadioData from '../../../components/RadioData';
import { theme } from '../../../constants/theme';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import strings from '../../../constants/strings';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  distanceUnit: distanceUnittType;
  setCurrency: Dispatch<SetStateAction<currencyType>>;
  setDistanceUnit: Dispatch<SetStateAction<distanceUnittType>>;
}

const CalculatorSettings = ({
  isOpen,
  onClose,
  currency,
  distanceUnit,
  setCurrency,
  setDistanceUnit,
}: Props): ReactElement => {
  const MemoizedCurrency = useMemo(() => {
    return (
      <RadioData
        data={['IND (₹)', 'USD ($)', 'GBP (£)']}
        title="Currency"
        defaultValue={currency}
        setValue={setCurrency}
      />
    );
  }, [currency]);
  const MemoizedDistance = useMemo(() => {
    return (
      <VStack space="2xl">
        <RadioData
          data={['Miles', 'Kilometers']}
          title={strings.DISTANCE_UNIT}
          defaultValue={distanceUnit}
          setValue={setDistanceUnit}
        />
        <RadioData
          data={['Liters', 'Gallons']}
          title={strings.FUEL_UNIT}
          defaultValue={distanceUnit}
          type="fuel"
        />
      </VStack>
    );
  }, [distanceUnit]);

  const fling = Gesture.Fling().direction(Directions.DOWN).runOnJS(true).onStart(onClose);

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <GestureHandlerRootView style={{ width: '100%' }}>
          <GestureDetector gesture={fling}>
            <VStack space="4xl" w={'100%'} padding={16}>
              {MemoizedCurrency}
              {MemoizedDistance}
            </VStack>
          </GestureDetector>
        </GestureHandlerRootView>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default CalculatorSettings;
