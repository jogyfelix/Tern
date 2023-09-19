import {
  GluestackUIProvider,
  StyledProvider,
  config,
} from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { config as styledConfig } from "../gluestack-style.config";

const BaseStackLayout = () => (
  <GluestackUIProvider config={config.theme}>
    <StyledProvider config={styledConfig}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </StyledProvider>
  </GluestackUIProvider>
);

export default BaseStackLayout;
