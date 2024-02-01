import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { theme } from '../../constants/theme';
import InputData from '../../components/general/InputData';
import PrimaryBtn from '../../components/general/PrimaryBtn';

const AddFuelEntry = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.black }}>
      <StatusBar backgroundColor={theme.COLORS.cardBg} />
      <View
        style={[
          {
            backgroundColor: theme.COLORS.cardBg,
            height: 200,
          },
        ]}
      >
        <Text
          style={[
            {
              color: theme.COLORS.text,
              fontSize: 24,
              marginHorizontal: 16,
              textAlign: 'center',
              position: 'absolute',
              bottom: 16,
              fontFamily: theme.FONTS.default,
            },
          ]}
        >
          Add fuel entry
        </Text>
      </View>
      <InputData placeholder="Cost" />
      <InputData placeholder="Total amount" />
      <InputData placeholder="Note" />
      <InputData placeholder="Date" />
      <PrimaryBtn title="Add entry" />
    </View>
  );
};

export default AddFuelEntry;
