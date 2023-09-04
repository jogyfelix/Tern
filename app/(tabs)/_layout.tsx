import { Tabs } from "expo-router";
import { Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 12,
          margin: 10,
          position: "absolute",
          paddingBottom: 6,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => <Text>🐱</Text>,
        }}
      />
      <Tabs.Screen
        name="Garage"
        options={{
          title: "Garage",
          tabBarIcon: () => <Text>🐶</Text>,
        }}
      />
      <Tabs.Screen
        name="Journal"
        options={{
          title: "Journal",
          tabBarIcon: () => <Text>🐶</Text>,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Text>🐶</Text>,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
