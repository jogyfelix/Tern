import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import screenNames from '../constants/screenNames';
import Calculator from '../screens/claculator/Calculator';
import { theme } from '../constants/theme';
import HomeBottomNav from './HomeBottomNav';
import AddFuelEntry from '../screens/fuel-ledger/AddFuelEntry';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

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
          presentation: 'fullScreenModal',
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
