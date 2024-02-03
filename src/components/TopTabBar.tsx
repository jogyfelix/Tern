import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { Icon, Text } from '@gluestack-ui/themed';
import { ArrowLeft } from 'lucide-react-native';

type props = {
  title: string;
  backPress: () => void;
};

const TopTabBar = ({ title, backPress }: props) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={5} onPress={backPress}>
        <Icon as={ArrowLeft} style={styles.icon} color={theme.COLORS.text} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.cardBg,
    height: 200,
  },
  icon: { padding: 12, margin: 16 },
  title: {
    color: theme.COLORS.text,
    fontSize: 24,
    marginHorizontal: 16,
    textAlign: 'center',
    position: 'absolute',
    bottom: 16,
    fontFamily: theme.FONTS.default,
  },
});

export default TopTabBar;
