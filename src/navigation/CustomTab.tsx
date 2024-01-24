import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const NAV_WIDTH = width;
const ICON_SIZE = 24;

function CustomTab({ state, descriptors, navigation }) {
  const translateX = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  return (
    <View style={styles.navContainer}>
      <Animated.View style={[styles.selectedContainer, rStyle]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          switch (index) {
            case 0:
              translateX.value = withSpring(0, { damping: 20 });
              break;
            case 1:
              translateX.value = withSpring(NAV_WIDTH * 0.24, { damping: 14 });
              break;
            case 2:
              translateX.value = withSpring(NAV_WIDTH * 0.48, { damping: 14 });
              break;
            case 3:
              translateX.value = withSpring(NAV_WIDTH * 0.72, { damping: 20 });
              break;
            default:
              translateX.value = withSpring(0, { damping: 20 });
              break;
          }

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          // eslint-disable-next-line react/jsx-key
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.itemParent}
          >
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  selectedContainer: {
    position: 'absolute',
    width: '25%',
    height: '50%',
    borderRadius: 20,
    backgroundColor: '#E5E8F8',
    marginHorizontal: 8,
  },
  navContainer: {
    width: NAV_WIDTH,
    height: 62,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  itemText: {
    color: 'grey',
    marginStart: 6,
    fontSize: 12,
  },
  itemParent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 40,
  },
});

export default CustomTab;
