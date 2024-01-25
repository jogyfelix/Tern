import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ParentView from '../../components/general/ParentView';
import strings from '../../constants/strings';
import { theme } from '../../constants/theme';
import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import { UserCircle } from 'lucide-react-native';

const Home = () => {
  return (
    <ParentView type="flex-start">
      <HStack justifyContent="space-between" alignItems="center">
        <VStack space="sm">
          <Text style={styles.greetingText}>How’s your day ?</Text>
          <Text style={styles.nameText}>Jogy Felix</Text>
        </VStack>
        <Icon as={UserCircle} color={theme.COLORS.white} size="xl" />
      </HStack>
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
