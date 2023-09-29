import { AddIcon, Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed";

const PrimaryBtn = () => {
  return (
    <Button
      size="xl"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText>Add </ButtonText>
      <ButtonIcon as={AddIcon} />
    </Button>
  );
};

export default PrimaryBtn;
