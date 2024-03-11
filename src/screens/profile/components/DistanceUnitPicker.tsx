import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import { Dispatch, UnknownAction } from 'redux';
import { theme } from '../../../constants/theme';
import { setUnit, unit } from '../../../redux/slices/userSlice';
import { Text, TouchableOpacity } from 'react-native';

type props = { onOpen: boolean; onClose: () => void; dispatch: Dispatch<UnknownAction> };

const DistanceUnitPicker = ({ onOpen, onClose, dispatch }: props) => {
  return (
    <Actionsheet isOpen={onOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {unit.map((value, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              dispatch(setUnit(value));
              onClose();
            }}
          >
            <Text
              style={{
                fontFamily: theme.FONTS.default,
                color: theme.COLORS.text,
                fontSize: 16,
                margin: 16,
              }}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default DistanceUnitPicker;
