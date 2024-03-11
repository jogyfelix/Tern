import React, { SetStateAction } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
} from '@gluestack-ui/themed';
import { theme } from '../../../constants/theme';
import { Text, TouchableOpacity, View } from 'react-native';

type props = {
  onOpen: boolean;
  onClose: () => void;
  setType: React.Dispatch<SetStateAction<string>>;
};
const ITEM_HEIGHT = 70;
const fuelTypes = [
  'Petrol (Gasoline)',
  'Diesel',
  'LPG (Liquefied Petroleum Gas)',
  'CNG (Compressed Natural Gas)',
  'Ethanol (E85)',
  'Biodiesel',
  'Electricity (EV)',
  'Hydrogen',
  'Biofuel (B20, B50)',
];

const FuelTypePicker = ({ onOpen, onClose, setType }: props) => {
  return (
    <Actionsheet isOpen={onOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetFlatList
          data={fuelTypes}
          ListHeaderComponentStyle={{ marginTop: 20 }}
          ListHeaderComponent={<View />}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setType(item);
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
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default FuelTypePicker;
