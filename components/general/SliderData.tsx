import {
  Badge,
  BadgeText,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from "@gluestack-ui/themed";
import { Text, View } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const SliderData = () => {
  return (
    <VStack space="sm">
      <Text
        style={{
          color: colors.white,
          fontFamily: fonts.default,
        }}
      >
        Number of People
      </Text>
      <View
        style={{
          backgroundColor: colors.cardBg1,
          paddingTop: 24,
          paddingBottom: 8,
          paddingHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        <Slider
          defaultValue={1}
          minValue={1}
          maxValue={10}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack bg={colors.secondary} />
          </SliderTrack>
          <SliderThumb bg={colors.secondary} />
        </Slider>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ color: colors.text1 }}>1</Text>
          <Text style={{ color: colors.text1 }}>5</Text>
          <Text style={{ color: colors.text1 }}>10</Text>
        </View>
      </View>

      <Badge
        size="lg"
        variant="solid"
        borderRadius={8}
        action="info"
        alignSelf="flex-start"
        bg={colors.cardBg}
        padding={6}
      >
        <BadgeText
          fontFamily={fonts.default}
          color={colors.text}
          textTransform="none"
        >
          Custom
        </BadgeText>
      </Badge>
    </VStack>
  );
};

export default SliderData;
