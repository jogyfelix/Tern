import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import Fab from '../../components/Fab';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { theme } from '../../constants/theme';
import { HStack, Icon } from '@gluestack-ui/themed';
import { Fuel } from 'lucide-react-native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

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

const FuelLedger = ({ navigation }: Props) => {
  const scrollOffsetY = useSharedValue(0);
  const [statusBarColor, setStatusBarColor] = useState(theme.COLORS.cardBg1);

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
        [theme.COLORS.cardBg1, theme.COLORS.cardBg]
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(scrollOffsetY.value, [0, SCROLL_DISTANCE], [28, 24], Extrapolate.CLAMP),
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={statusBarColor} />
      <Animated.View style={[rStyle]}>
        <Animated.Text
          style={[
            {
              color: theme.COLORS.text,
              fontSize: 24,
              marginHorizontal: 16,
              textAlign: 'center',
              position: 'absolute',
              bottom: 16,
              fontFamily: theme.FONTS.default,
            },
            textStyle,
          ]}
        >
          Fuel Ledger
        </Animated.Text>
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
          if (event.nativeEvent.contentOffset.y > theme.DIMENSIONS.MIN_HEADER_HEIGHT) {
            setStatusBarColor(theme.COLORS.cardBg);
          } else {
            setStatusBarColor(theme.COLORS.cardBg1);
          }
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

      <Fab onPress={() => navigation.navigate(screenNames.FUEL_ENTRY_SCREEN)} />
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

export default FuelLedger;
