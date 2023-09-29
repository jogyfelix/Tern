import {
  Center,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from "@gluestack-ui/themed";
import { Text } from "react-native";

const SliderData = () => {
  return (
    <Center w={300} h={100}>
      <Slider
        defaultValue={30}
        size="md"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  );
};

export default SliderData;
