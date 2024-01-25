import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ParentView from '../../components/general/ParentView';
import strings from '../../constants/strings';
import screenNames from '../../constants/screenNames';
import { theme } from '../../constants/theme';
import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import { UserCircle } from 'lucide-react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Home = ({ navigation }: Props) => {
  return (
    <ParentView type="space-between" paddingBottom={112}>
      <HStack justifyContent="space-between" alignItems="center">
        <VStack space="sm">
          <Text style={styles.greetingText}>How’s your day ?</Text>
          <Text style={styles.nameText}>Jogy Felix</Text>
        </VStack>
        <Icon as={UserCircle} color={theme.COLORS.white} size="xl" />
      </HStack>
      <TouchableOpacity onPress={() => navigation.navigate(screenNames.CALCULATOR_SCREEN)}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderColor={theme.COLORS.borderColor}
          borderWidth={1}
          padding={16}
          borderRadius={theme.DIMENSIONS.cardBorder}
        >
          <Text style={{ fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 16 }}>
            Fuel Calculator
          </Text>
          <VStack>
            <Text
              style={{ fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 16 }}
            >
              $160
            </Text>
            <Text
              style={{ fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 16 }}
            >
              14 Jan
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    </ParentView>
  );
};

const styles = StyleSheet.create({
  greetingText: {
    fontFamily: theme.FONTS.default,
    color: theme.COLORS.text,
    fontSize: 20,
  },
  nameText: {
    fontFamily: theme.FONTS.primary,
    color: theme.COLORS.text,
    fontSize: 26,
  },
});

export default Home;
