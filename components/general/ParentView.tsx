import { styled } from "@gluestack-style/react";
import { SafeAreaView } from "react-native-safe-area-context";
import dimensions from "../../constants/dimensions";

const ParentView = ({
  type = "space-between",
  children,
}: {
  type: "space-between" | "flex-start" | "space-evenly" | "space-around";
  children: any;
}) => {
  return <View style={{ justifyContent: type }}>{children}</View>;
};

const View = styled(SafeAreaView, {
  backgroundColor: "black",
  flex: 1,
  padding: dimensions.defaultParentPadding,
});

export default ParentView;
