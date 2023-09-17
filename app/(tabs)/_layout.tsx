import { Tabs } from "expo-router";
import { Icon } from "@gluestack-ui/themed";
import { Home, StickyNote, User, Wrench } from "lucide-react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => <Icon as={Home} color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="Garage"
        options={{
          title: "Garage",
          tabBarIcon: () => <Icon as={Wrench} color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="Journal"
        options={{
          title: "Journal",
          tabBarIcon: () => <Icon as={StickyNote} color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Icon as={User} color={"white"} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
