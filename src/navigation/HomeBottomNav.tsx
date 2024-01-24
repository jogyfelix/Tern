import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Service from '../screens/service/Service';
import FuelLedger from '../screens/fuel-ledger/FuelLedger';
import Profile from '../screens/profile/Profile';
import screenNames from '../constants/screenNames';
import CustomTab from './CustomTab';

const Tab = createBottomTabNavigator();

const HomeBottomNav = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name={screenNames.HOME_SCREEN} component={Home} />
      <Tab.Screen name={screenNames.SERVICE_SCREEN} component={Service} />
      <Tab.Screen name={screenNames.FUEL_LEDGER_SCREEN} component={FuelLedger} />
      <Tab.Screen name={screenNames.PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeBottomNav;
