import {
  GluestackUIProvider,
  StyledProvider,
  config,
} from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import fonts from "../constants/fonts";
import colors from "../constants/colors";

const BaseStackLayout = () => (
  <GluestackUIProvider config={config.theme}>
    <StyledProvider config={config.theme}>
      <Stack screenOptions={{ statusBarColor: colors.black }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="Calculator"
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: colors.black },
            headerTintColor: "white",
            headerTitleStyle: { fontFamily: fonts.default },
          }}
        />
      </Stack>
    </StyledProvider>
  </GluestackUIProvider>
);

export default BaseStackLayout;
