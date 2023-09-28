import { Input, InputField } from "@gluestack-ui/themed";

const InputData = () => {
  return (
    <Input
      variant="rounded"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here" />
    </Input>
  );
};

export default InputData;
