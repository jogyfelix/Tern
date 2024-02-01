import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GluestackUIProvider, StyledProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewStyle } from 'react-native';
import MainStackNav from './navigation/MainStackNav';

const App = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StyledProvider config={config}>
          <GestureHandlerRootView style={$container}>
            <MainStackNav />
          </GestureHandlerRootView>
        </StyledProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

//husky test

const $container: ViewStyle = {
  flex: 1,
};

export default App;
