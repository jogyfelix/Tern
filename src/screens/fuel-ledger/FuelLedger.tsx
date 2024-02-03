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

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const MAX_HEADER_HEIGHT = 200;
const MIN_HEADER_HEIGHT = 70;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

const FuelLedger = ({ navigation }: Props) => {
  const scrollOffsetY = useSharedValue(0);
  const [statusBarColor, setStatusBarColor] = useState(theme.COLORS.black);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
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
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={statusBarColor} />
      <Animated.View
        style={[
          {
            backgroundColor: theme.COLORS.black,
          },
          rStyle,
        ]}
      >
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
        onScroll={(event) => {
          scrollOffsetY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 100 });
          if (event.nativeEvent.contentOffset.y > MIN_HEADER_HEIGHT) {
            setStatusBarColor(theme.COLORS.cardBg);
          } else {
            setStatusBarColor(theme.COLORS.black);
          }
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default FuelLedger;
