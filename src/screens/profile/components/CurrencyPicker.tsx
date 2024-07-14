import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
} from '@gluestack-ui/themed';
import { Dispatch, UnknownAction } from 'redux';
import { theme } from '../../../constants/theme';
import { currencies, setCurrency } from '../../../redux/slices/userSlice';
import { Text, TouchableOpacity } from 'react-native';

type props = { onOpen: boolean; onClose: () => void; dispatch: Dispatch<UnknownAction> };
const ITEM_HEIGHT = 70;

const CurrencyPicker = ({ onOpen, onClose, dispatch }: props) => {
  return (
    <Actionsheet isOpen={onOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent height={'90%'} bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetFlatList
          data={currencies}
          initialNumToRender={12}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(setCurrency(item));
                onClose();
              }}
            >
              <Text
                style={{
                  fontFamily: theme.FONTS.default,
                  color: theme.COLORS.text,
                  fontSize: 16,
                  height: ITEM_HEIGHT,
                  marginHorizontal: 16,
                }}
              >
                {item.name} ({item.code}) {item.symbol}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default CurrencyPicker;
