import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { AddIcon, Icon } from '@gluestack-ui/themed';

type props = {
  onPress: () => void;
};

const Fab = ({ onPress }: props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon as={AddIcon} color={theme.COLORS.white} size="xl" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.cardBg,
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 110,
    right: 16,
  },
});

export default Fab;
