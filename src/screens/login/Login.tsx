import React, { useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import ParentView from '../../components/general/ParentView';
import Logo from '../../../assets/svg/tern-logo.svg';
import SocialAuthBtn from '../../components/general/SocialAuthBtn';
import strings from '../../constants/strings';
import screenNames from '../../constants/screenNames';
import TextBtn from '../../components/general/TextBtn';
import { theme } from '../../constants/theme';
import { VStack } from '@gluestack-ui/themed';
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation?: NavigationProp<ParamListBase>;
}

const Login = ({ navigation }: Props) => {
  const logoFadeShared = useSharedValue(0);
  const titleFadeShared = useSharedValue(0);
  const subTitleFadeShared = useSharedValue(0);

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: logoFadeShared.value,
    };
  });
  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: titleFadeShared.value,
    };
  });
  const subTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: subTitleFadeShared.value,
    };
  });

  useEffect(() => {
    logoFadeShared.value = withDelay(500, withTiming(1, { duration: 500 }));
    titleFadeShared.value = withDelay(600, withTiming(1, { duration: 500 }));
    subTitleFadeShared.value = withDelay(700, withTiming(1, { duration: 500 }));
  }, []);
  return (
    <ParentView type="space-between">
      <StatusBar backgroundColor={theme.COLORS.black} />
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <Logo />
      </Animated.View>

      <VStack style={styles.btnContainer} space="xl">
        <View style={{ marginBottom: 28 }}>
          <Animated.Text style={[styles.appNameText, titleStyle]}>{strings.APP_NAME}</Animated.Text>
          <Animated.Text style={[styles.taglineText, subTitleStyle]}>
            {strings.APP_TAG_LINE}
          </Animated.Text>
        </View>
        <Animated.View entering={SlideInDown.delay(200).duration(2000)}>
          <SocialAuthBtn
            title={strings.CONTINUE_WITH_GOOGLE}
            onPress={() => {
              console.log('here');
            }}
          />
        </Animated.View>
        <Animated.View entering={SlideInDown.delay(280).duration(2000)}>
          <TextBtn
            title={strings.SKIP}
            onPress={() => navigation?.navigate(screenNames.BOTTOM_TAB)}
          />
        </Animated.View>
      </VStack>
    </ParentView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 24,
    marginHorizontal: theme.DIMENSIONS.defaultHorizontalMargin,
    flex: 1,
  },
  logoContainer: { flex: 2, justifyContent: 'center' },
  appNameText: { color: theme.COLORS.white, fontFamily: theme.FONTS.primary, fontSize: 48 },
  taglineText: { color: theme.COLORS.white, fontFamily: theme.FONTS.default, fontSize: 18 },
});

export default Login;
