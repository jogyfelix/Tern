import React from 'react';
import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native';
import ParentView from '../../components/general/ParentView';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import Fab from '../../components/general/Fab';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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

const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

const FuelLedger = ({ navigation }: Props) => {
  const scrollOffsetY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollOffsetY.value,
        [0, Scroll_Distance],
        [Max_Header_Height, Min_Header_Height],
        Extrapolate.CLAMP
      ),
    };
  });
  return (
    <ParentView type="center">
      <Animated.View
        style={[
          {
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // right: 0,

            backgroundColor: 'red',
          },
          rStyle,
        ]}
      />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        scrollEventThrottle={16}
        onScroll={(event) => {
          scrollOffsetY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 100 });
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />

      <Fab onPress={() => navigation.navigate(screenNames.FUEL_ENTRY_SCREEN)} />
    </ParentView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
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
