import React from 'react';
import { View, Text } from 'react-native';
import ParentView from '../../components/general/ParentView';
import SecondaryBtn from '../../components/general/SecondaryBtn';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const FuelLedger = ({ navigation }: Props) => {
  return (
    <ParentView type="center">
      <SecondaryBtn
        title="Add"
        onPress={() => navigation.navigate(screenNames.FUEL_ENTRY_SCREEN)}
      />
    </ParentView>
  );
};

export default FuelLedger;
