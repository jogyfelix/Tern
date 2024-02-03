import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ParentView from '../../components/ParentView';
import strings from '../../constants/strings';
import screenNames from '../../constants/screenNames';
import { theme } from '../../constants/theme';
import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import { UserCircle } from 'lucide-react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CalcCard from './components/CalcCard';
import EmptyCard from './components/EmptyCard';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Home = ({ navigation }: Props) => {
  return (
    <ParentView type="flex-start" paddingBottom={112}>
      <HStack justifyContent="space-between" alignItems="center" marginBottom={16}>
        <VStack space="sm">
          <Text style={styles.greetingText}>How’s your day ?</Text>
          <Text style={styles.nameText}>Jogy Felix</Text>
        </VStack>
        <Icon as={UserCircle} color={theme.COLORS.white} size="xl" />
      </HStack>
      <EmptyCard type="garage" onPress={() => navigation.navigate(screenNames.SERVICE_SCREEN)} />
      <EmptyCard
        type="ledger"
        onPress={() => navigation.navigate(screenNames.FUEL_LEDGER_SCREEN)}
      />
      <CalcCard onPress={() => navigation.navigate(screenNames.CALCULATOR_SCREEN)} />
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
