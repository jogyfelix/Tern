import { Button, ButtonText } from "@gluestack-ui/themed";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const PrimaryBtn = () => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={16}
      bg={colors.secondary}
    >
      <ButtonText fontFamily={fonts.default}>Calculate</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
