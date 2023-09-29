import {
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from "@gluestack-ui/themed";
import { Fuel } from "lucide-react-native";
import { config } from "../../gluestack-style.config";
import { Text } from "react-native";

const InputData = () => {
  return (
    <VStack>
      <Text style={{ color: "white" }}>Hello</Text>
      <Input
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        style={{ borderColor: "white" }}
      >
        <InputField placeholder="Hello" placeholderTextColor={"green"} />
        <InputSlot>
          <InputIcon>
            <Icon as={Fuel} color={config.tokens.colors.primary} size="lg" />
          </InputIcon>
        </InputSlot>
      </Input>
    </VStack>
  );
};

export default InputData;
