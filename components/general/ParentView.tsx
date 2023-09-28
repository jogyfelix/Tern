import { styled } from "@gluestack-style/react";
import { SafeAreaView } from "react-native-safe-area-context";

const ParentView = ({ children }: { children: any }) => {
  return <View>{children}</View>;
};

const View = styled(SafeAreaView, {
  backgroundColor: "black",
  flex: 1,
  justifyContent: "space-between",
  padding: 16,
});

export default ParentView;
