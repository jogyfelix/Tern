import { styled } from "@gluestack-style/react";
import { Pressable, View, Text } from "react-native";
import { Fuel } from "lucide-react-native";
import { Icon } from "@gluestack-ui/themed";
import { config } from "../../gluestack-style.config";

const CalculatorTile = ({ label }: { label: string }) => {
  return (
    <ParentView>
      <IconParent>
        <Icon as={Fuel} color={config.tokens.colors.primary} size="lg" />
      </IconParent>
      <Title>{label}</Title>
    </ParentView>
  );
};

const ParentView = styled(Pressable, {
  h: 80,
  bg: "$tileBg",
  borderRadius: 16,
  alignItems: "center",
  flexDirection: "row",
  paddingStart: 16,
});

const IconParent = styled(View, {
  bg: "$tileImageBgDark",
  borderRadius: 22,
  padding: 16,
});

const Title = styled(Text, {
  color: "$white",
  fontFamily: "Alata-Regular",
  fontSize: 20,
  marginStart: 16,
});
export default CalculatorTile;
