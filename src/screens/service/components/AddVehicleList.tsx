import React from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import { theme } from '../../../constants/theme';
import { Icon } from '@gluestack-ui/themed';
import { Plus } from 'lucide-react-native';

type props = {
  data: Array<object>;
  onPress: () => void;
  addServicePress: () => void;
};

const AddVehicleList = ({ data, onPress, addServicePress }: props) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      horizontal
      data={data}
      contentContainerStyle={{ marginBottom: 20 }}
      key={(_, index) => index}
      ListFooterComponent={
        <View
          style={{
            backgroundColor: theme.COLORS.cardBg1,
            height: 160,
            width: width * 0.4,
            borderRadius: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onTouchEnd={onPress}
        >
          <Icon as={Plus} color={theme.COLORS.text1} style={{ padding: 18 }} />
        </View>
      }
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: theme.COLORS.cardBg,
            height: 160,
            width: width * 0.4,
            borderRadius: 18,
            marginEnd: 12,
          }}
          onTouchEnd={addServicePress}
        ></View>
      )}
    />
  );
};

export default AddVehicleList;
