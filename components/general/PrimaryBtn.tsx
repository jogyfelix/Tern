import { Button, ButtonText } from "@gluestack-ui/themed";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

const PrimaryBtn = () => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      borderRadius={dimensions.buttonBorder}
      bg={colors.secondary}
    >
      <ButtonText fontFamily={fonts.default}>Calculate</ButtonText>
    </Button>
  );
};

export default PrimaryBtn;
