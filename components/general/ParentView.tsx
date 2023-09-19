import { styled } from "@gluestack-style/react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const ParentView = ({ children }: { children: any }) => {
  return (
    <View>
      <StatusBar style="light" />
      {children}
    </View>
  );
};

const View = styled(SafeAreaView, {
  backgroundColor: "black",
  flex: 1,
  justifyContent: "space-between",
  padding: 24,
});

export default ParentView;
