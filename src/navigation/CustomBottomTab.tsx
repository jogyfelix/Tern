import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  FadeInDown,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { theme } from '../constants/theme';
import { Icon } from '@gluestack-ui/themed';
import { HomeIcon, PaperclipIcon, UserIcon, WrenchIcon } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const NAV_WIDTH = width - 32;

type props = { state: any; descriptors: any; navigation: any };

const CustomBottomTab = ({ state, descriptors, navigation }: props) => {
  const translateX = useSharedValue(8);
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
    <Animated.View style={styles.navContainer} entering={SlideInDown.duration(1000)}>
      <Animated.View style={[styles.selectedContainer, rStyle]} />
      {state.routes.map(
        (route: { key: string | number; name: any; params: any }, index: number) => {
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
                translateX.value = withSpring(8, { damping: 20 });
                break;
              case 1:
                translateX.value = withSpring(NAV_WIDTH * 0.25, { damping: 14 });
                break;
              case 2:
                translateX.value = withSpring(NAV_WIDTH * 0.48, { damping: 14 });
                break;
              case 3:
                translateX.value = withSpring(NAV_WIDTH * 0.71, { damping: 20 });
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
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.itemParent}
            >
              {index == 0 ? (
                <Icon as={HomeIcon} color={theme.COLORS.white} />
              ) : index == 1 ? (
                <Icon as={WrenchIcon} color={theme.COLORS.white} />
              ) : index == 2 ? (
                <Icon as={PaperclipIcon} color={theme.COLORS.white} />
              ) : (
                <Icon as={UserIcon} color={theme.COLORS.white} />
              )}

              {isFocused && (
                <Animated.Text entering={FadeInDown} style={styles.itemText}>
                  {label}
                </Animated.Text>
              )}
            </TouchableOpacity>
          );
        }
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  selectedContainer: {
    position: 'absolute',
    width: '25%',
    height: '60%',
    borderRadius: 22,
    backgroundColor: theme.COLORS.borderColor,
    marginHorizontal: 8,
  },
  navContainer: {
    width: NAV_WIDTH,
    height: 82,
    backgroundColor: theme.COLORS.cardBg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginHorizontal: theme.DIMENSIONS.defaultHorizontalMargin,
    borderRadius: 22,
    position: 'absolute',
    bottom: 8,
  },
  itemText: {
    color: theme.COLORS.text,
    marginStart: 6,
    fontSize: 14,
    fontFamily: theme.FONTS.default,
  },
  itemParent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default CustomBottomTab;
