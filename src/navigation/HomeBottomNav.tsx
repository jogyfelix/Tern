import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Service from '../screens/service/Service';
import FuelLedger from '../screens/fuel-ledger/FuelLedger';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const HomeBottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="FuelLedger" component={FuelLedger} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeBottomNav;
