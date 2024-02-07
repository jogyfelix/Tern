import React from 'react';
import { View, Text, SectionList, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import Fab from '../../components/Fab';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { HStack, Icon } from '@gluestack-ui/themed';
import { Fuel } from 'lucide-react-native';
import { theme } from '../../constants/theme';

const DATA = [
  {
    title: 'Januray, 2024',
    data: [
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
    ],
  },
  {
    title: 'February, 2024',
    data: [
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
    ],
  },
  {
    title: 'March, 2024',
    data: [
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
    ],
  },
  {
    title: 'April, 2024',
    data: [
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
      { date: '10 Jan 2024', cost: 200 },
    ],
  },
];

const SCROLL_DISTANCE = theme.DIMENSIONS.MAX_HEADER_HEIGHT - theme.DIMENSIONS.MIN_HEADER_HEIGHT;

const Service = () => {
  const { width } = useWindowDimensions();
  const scrollOffsetY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        [theme.DIMENSIONS.MAX_HEADER_HEIGHT, theme.DIMENSIONS.MIN_HEADER_HEIGHT],
        Extrapolate.CLAMP
      ),
      // backgroundColor: interpolateColor(
      //   scrollOffsetY.value,
      //   [0, SCROLL_DISTANCE],
      //   [theme.COLORS.cardBg1, theme.COLORS.cardBg]
      // ),
    };
  });

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffsetY.value, [0, SCROLL_DISTANCE], [1, 0], Extrapolate.CLAMP),
    };
  });
  return (
    <View style={{ backgroundColor: theme.COLORS.black, flex: 1 }}>
      <StatusBar backgroundColor={theme.COLORS.black} />
      <Animated.View style={rStyle}>
        <View style={{ height: theme.DIMENSIONS.MIN_HEADER_HEIGHT, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 22,
              color: theme.COLORS.text,
              fontFamily: theme.FONTS.default,
              marginHorizontal: theme.DIMENSIONS.defaultHorizontalMargin,
            }}
          >
            Your Vehicles
          </Text>
        </View>
        <Animated.View style={fadeStyle}>
          <HStack marginStart={16} gap={16} marginVertical={16}>
            <View
              style={{
                backgroundColor: theme.COLORS.cardBg,
                height: 160,
                width: width * 0.4,
                borderRadius: 18,
              }}
            />
            <View
              style={{
                backgroundColor: theme.COLORS.cardBg,
                height: 160,
                width: width * 0.4,
                borderRadius: 18,
              }}
            />
          </HStack>
        </Animated.View>
      </Animated.View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ marginHorizontal: 16 }}
        scrollEventThrottle={16}
        ListFooterComponent={() => <View style={{ marginVertical: 110 }} />}
        onScroll={(event) => {
          scrollOffsetY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 100 });
          // if (event.nativeEvent.contentOffset.y > theme.DIMENSIONS.MIN_HEADER_HEIGHT) {
          //   setStatusBarColor(theme.COLORS.cardBg);
          // } else {
          //   setStatusBarColor(theme.COLORS.cardBg1);
          // }
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <HStack alignItems="center" gap={10}>
              <View
                style={{ padding: 12, backgroundColor: 'rgba(129,178,202,0.4)', borderRadius: 10 }}
              >
                <Icon as={Fuel} color="#81B2CA" style={{ padding: 14 }} />
              </View>

              <Text style={styles.title}>{item.date}</Text>
            </HStack>

            <Text style={styles.cost}>${item.cost}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />

      <Fab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.black,
  },
  item: {
    backgroundColor: theme.COLORS.cardBg,
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    color: theme.COLORS.text,
    fontFamily: theme.FONTS.default,
    textAlign: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    color: theme.COLORS.text,
    fontFamily: theme.FONTS.default,
  },
  cost: {
    fontSize: 16,
    color: theme.COLORS.text1,
    fontFamily: theme.FONTS.default,
  },
});

export default Service;
