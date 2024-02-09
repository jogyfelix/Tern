import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import screenNames from '../constants/screenNames';
import Calculator from '../screens/claculator/Calculator';
import { theme } from '../constants/theme';
import HomeBottomNav from './HomeBottomNav';
import AddFuelEntry from '../screens/fuel-ledger/AddFuelEntry';
import AddVehicle from '../screens/service/AddVehicle';
import AddService from '../screens/service/AddService';
import Login from '../screens/login/Login';

const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.LOGIN_SCREEN}>
      <Stack.Screen
        name={screenNames.CALCULATOR_SCREEN}
        component={Calculator}
        options={{
          headerTitle: 'Fuel Calculator',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: theme.COLORS.black },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: theme.FONTS.default },
        }}
      />
      <Stack.Screen
        name={screenNames.BOTTOM_TAB}
        component={HomeBottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.FUEL_ENTRY_SCREEN}
        component={AddFuelEntry}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={screenNames.ADD_VEHICLE_SCREEN}
        component={AddVehicle}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={screenNames.ADD_SERVICE_SCREEN}
        component={AddService}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={screenNames.LOGIN_SCREEN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNav;
