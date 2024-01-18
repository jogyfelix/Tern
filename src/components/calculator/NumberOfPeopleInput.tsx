import React, { type ReactElement } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  VStack,
} from '@gluestack-ui/themed';
import InputData from '../general/InputData';
import { theme } from '../../constants/theme';
import PrimaryBtn from '../general/PrimaryBtn';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  setValue: (value: string) => void;
}

const NumberOfPeopleInput = ({ isOpen, onClose, value, setValue }: Props): ReactElement => {
  const fling = Gesture.Fling()
    .direction(Directions.DOWN)
    .runOnJS(true)
    .onStart(() => {
      onClose();
    });

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} style={{ backgroundColor: theme.COLORS.cardBg }}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <GestureHandlerRootView style={{ width: '100%' }}>
          <GestureDetector gesture={fling}>
            <VStack space="2xl" style={{ padding: 16 }}>
              <InputData
                title="Number of People"
                placeholder="Enter number of people"
                value={value}
                setValue={setValue}
                onSubmitEditing={onClose}
              />
              <PrimaryBtn title="Add" onPress={onClose} />
            </VStack>
          </GestureDetector>
        </GestureHandlerRootView>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default NumberOfPeopleInput;
