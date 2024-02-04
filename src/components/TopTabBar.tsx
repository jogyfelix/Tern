import React from 'react';
import { Pressable, StatusBar, StyleSheet, View } from 'react-native';
import { theme } from '../constants/theme';
import { Icon } from '@gluestack-ui/themed';
import { ArrowLeft } from 'lucide-react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

type props = {
  title: string;
  backPress: () => void;
  isKeyboardVisible: boolean;
};

const SCROLL_DISTANCE = theme.DIMENSIONS.MAX_HEADER_HEIGHT - theme.DIMENSIONS.MIN_HEADER_HEIGHT;

const TopTabBar = ({ title, backPress, isKeyboardVisible }: props) => {
  const scrollOffsetY = useDerivedValue(() => {
    return isKeyboardVisible
      ? withTiming(SCROLL_DISTANCE, { duration: 400 })
      : withTiming(0, { duration: 400 });
  }, [isKeyboardVisible]);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        [theme.DIMENSIONS.MAX_HEADER_HEIGHT, theme.DIMENSIONS.MIN_HEADER_HEIGHT],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        ['transparent', theme.COLORS.cardBg]
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(scrollOffsetY.value, [0, SCROLL_DISTANCE], [28, 24], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(
            scrollOffsetY.value,
            [0, SCROLL_DISTANCE],
            [0, 32],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <View>
      <StatusBar
        animated
        backgroundColor={isKeyboardVisible ? theme.COLORS.cardBg : theme.COLORS.black}
      />
      <Animated.View style={[styles.container, rStyle]}>
        <Pressable hitSlop={5} onPress={backPress}>
          <Icon as={ArrowLeft} style={styles.icon} color={theme.COLORS.text} />
        </Pressable>

        <Animated.Text style={[styles.title, textStyle]}>{title}</Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  icon: { padding: 12, margin: 16 },
  title: {
    color: theme.COLORS.text,
    fontSize: 24,
    marginHorizontal: 16,
    textAlign: 'center',
    position: 'absolute',
    bottom: 16,
    fontFamily: theme.FONTS.default,
  },
});

export default TopTabBar;
