import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { Stack } from "expo-router";

const BaseStackLayout = () => (
  <GluestackUIProvider config={config.theme}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  </GluestackUIProvider>
);

export default BaseStackLayout;
