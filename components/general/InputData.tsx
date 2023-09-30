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
import dimensions from "../../constants/dimensions";

const InputData = ({
  title,
  placeholder,
  enableMenu = false,
}: {
  title: string;
  placeholder: string;
  enableMenu?: boolean;
}) => {
  return (
    <VStack space="sm">
      <Text
        style={{
          color: colors.white,
          fontFamily: fonts.default,
        }}
      >
        {title}
      </Text>
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        borderColor={colors.borderColor}
        borderRadius={dimensions.inputBorder}
      >
        <InputField
          bg={colors.cardBg1}
          placeholder={placeholder}
          paddingStart={4}
        />
        {enableMenu && (
          <InputSlot
            bg={colors.cardBg1}
            paddingEnd={6}
            onPress={() => console.log("clicked")}
          >
            <InputIcon as={Menu} color={colors.text} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};

export default InputData;
