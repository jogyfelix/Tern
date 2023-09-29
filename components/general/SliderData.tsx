import {
  Badge,
  BadgeText,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@gluestack-ui/themed";
import { Text, View } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const SliderData = () => {
  return (
    <View>
      <Text
        style={{
          color: colors.white,
          marginBottom: 12,
          fontFamily: fonts.default,
        }}
      >
        No. of people
      </Text>
      <View style={{ marginHorizontal: 10 }}>
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
          <Text style={{ color: colors.white }}>1</Text>
          <Text style={{ color: colors.white }}>5</Text>
          <Text style={{ color: colors.white }}>10</Text>
        </View>
      </View>

      <Badge
        size="lg"
        variant="solid"
        borderRadius={8}
        action="info"
        alignSelf="flex-start"
        marginTop={10}
        bg={colors.cardBg}
        padding={4}
      >
        <BadgeText
          fontFamily={fonts.default}
          color={colors.white}
          textTransform="none"
        >
          Custom
        </BadgeText>
      </Badge>
    </View>
  );
};

export default SliderData;
