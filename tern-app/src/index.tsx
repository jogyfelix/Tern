import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Calculator from './screens/claculator/Calculator';
import { GluestackUIProvider, StyledProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { theme } from './constants/theme';
import screenNames from './constants/screenNames';
import HomeBottomNav from './navigation/HomeBottomNav';
import Login from './screens/login/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StyledProvider config={config}>
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
              name={screenNames.LOGIN_SCREEN}
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </StyledProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
