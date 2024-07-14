import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
} from '@gluestack-ui/themed';
import React, { SetStateAction } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../constants/theme';

type props = {
  onOpen: boolean;
  onClose: () => void;
  setType: React.Dispatch<SetStateAction<string>>;
};
const ITEM_HEIGHT = 70;
const vehicleTypes = [
  'Car',
  'Motorcycle',
  'Truck',
  'SUV',
  'Van',
  'Bus',
  'Electric Vehicle (EV)',
  'Hybrid Vehicle',
  'Bicycle',
  'Scooter',
  'RV/Camper',
  'Boat',
  'Aircraft',
];

const VehicleTypePicker = ({ onOpen, onClose, setType }: props) => {
  return (
    <Actionsheet isOpen={onOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent height={'90%'} bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetFlatList
          data={vehicleTypes}
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

export default VehicleTypePicker;
