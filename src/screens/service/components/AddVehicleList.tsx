import React from 'react';
import { View, FlatList, useWindowDimensions, Text } from 'react-native';
import { theme } from '../../../constants/theme';
import { Icon } from '@gluestack-ui/themed';
import { Plus } from 'lucide-react-native';
import screenNames from '../../../constants/screenNames';
import { useNavigation } from '@react-navigation/native';

type props = {
  data: Array<any>;
  onPress: () => void;
};

const AddVehicleList = ({ data, onPress }: props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
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
          onTouchEnd={() =>
            navigation.navigate(screenNames.ADD_SERVICE_SCREEN, {
              vehicleId: item.id,
              vehicleName: item.name,
            })
          }
        >
          <Text
            style={{
              color: theme.COLORS.text,
              fontFamily: theme.FONTS.default,
              fontSize: 24,
              marginStart: 16,
              marginTop: 16,
            }}
          >
            {item.name}
          </Text>
          <Icon
            as={Plus}
            color={theme.COLORS.text1}
            size="xl"
            style={{ position: 'absolute', bottom: 8, end: 8 }}
          />
        </View>
      )}
    />
  );
};

export default AddVehicleList;
