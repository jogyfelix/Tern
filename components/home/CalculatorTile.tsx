import { styled } from "@gluestack-style/react";
import { Pressable, View, Text } from "react-native";
import { Fuel } from "lucide-react-native";
import { Icon } from "@gluestack-ui/themed";
import { config } from "../../gluestack-style.config";
import colors from "../../constants/colors";

const CalculatorTile = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <ParentView onPress={onPress}>
      <IconParent>
        <Icon as={Fuel} color={config.tokens.colors.primary} size="lg" />
      </IconParent>
      <Title>{label}</Title>
    </ParentView>
  );
};

const ParentView = styled(Pressable, {
  h: 80,
  bg: colors.cardBg,
  borderRadius: 16,
  alignItems: "center",
  flexDirection: "row",
  paddingStart: 16,
});

const IconParent = styled(View, {
  bg: colors.black1,
  borderRadius: 22,
  padding: 16,
});

const Title = styled(Text, {
  color: colors.white,
  fontFamily: "Alata-Regular",
  fontSize: 20,
  marginStart: 16,
});
export default CalculatorTile;
