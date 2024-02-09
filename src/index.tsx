import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GluestackUIProvider, StyledProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewStyle } from 'react-native';
import MainStackNav from './navigation/MainStackNav';
import { Provider } from 'react-redux';
import Store, { Persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StyledProvider config={config}>
          <GestureHandlerRootView style={$container}>
            {/* <Provider store={Store}>
              <PersistGate persistor={Persistor}> */}
            <MainStackNav />
            {/* </PersistGate>
            </Provider> */}
          </GestureHandlerRootView>
        </StyledProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

const $container: ViewStyle = {
  flex: 1,
};

export default App;
