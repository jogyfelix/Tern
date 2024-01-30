import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Service from '../screens/service/Service';
import FuelLedger from '../screens/fuel-ledger/FuelLedger';
import Profile from '../screens/profile/Profile';
import screenNames from '../constants/screenNames';
import CustomTab from './CustomBottomTab';
import strings from '../constants/strings';

const Tab = createBottomTabNavigator();

const HomeBottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={screenNames.HOME_SCREEN}
        component={Home}
        options={{ title: strings.HOME }}
      />
      <Tab.Screen
        name={screenNames.SERVICE_SCREEN}
        component={Service}
        options={{ title: strings.SERVICE }}
      />
      <Tab.Screen
        name={screenNames.FUEL_LEDGER_SCREEN}
        component={FuelLedger}
        options={{ title: strings.LEDGER }}
      />
      <Tab.Screen
        name={screenNames.PROFILE_SCREEN}
        component={Profile}
        options={{ title: strings.PROFILE }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNav;
