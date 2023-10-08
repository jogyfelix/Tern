import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Calculator from './screens/claculator/Calculator';
import {GluestackUIProvider, StyledProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {theme} from './constants/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StyledProvider config={config}>
          <Stack.Navigator>
            <Stack.Screen
              name="Calculator"
              component={Calculator}
              options={{
                headerTitle: 'Fuel Calculator',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: theme.COLORS.black},
                headerTintColor: 'white',
                headerTitleStyle: {fontFamily: theme.FONTS.default},
              }}
            />
          </Stack.Navigator>
        </StyledProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
