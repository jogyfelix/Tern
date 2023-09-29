import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from "@gluestack-ui/themed";
import { Menu } from "lucide-react-native";
import { Text } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const InputData = ({ title }: { title: string }) => {
  return (
    <VStack>
      <Text
        style={{
          color: colors.white,
          marginBottom: 6,
          fontFamily: fonts.default,
        }}
      >
        {title}
      </Text>
      <Input
        variant="outline"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        style={{ borderColor: "white", borderRadius: 8 }}
      >
        <InputField />
        <InputSlot paddingEnd={6} onPress={() => console.log("clicked")}>
          <InputIcon as={Menu} color={colors.white} />
        </InputSlot>
      </Input>
    </VStack>
  );
};

export default InputData;
