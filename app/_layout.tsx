import {
  GluestackUIProvider,
  Icon,
  StyledProvider,
  config,
} from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { config as styledConfig } from "../gluestack-style.config";

const BaseStackLayout = () => (
  <GluestackUIProvider config={config.theme}>
    <StyledProvider config={styledConfig}>
      <Stack screenOptions={{ statusBarColor: "black" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="Calculator"
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        />
      </Stack>
    </StyledProvider>
  </GluestackUIProvider>
);

export default BaseStackLayout;
