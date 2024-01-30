import React, { ReactNode } from 'react';
import { styled } from '@gluestack-style/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';

const ParentView = ({
  type = 'space-between',
  paddingBottom = 0,
  children,
}: {
  type?: 'space-between' | 'flex-start' | 'space-evenly' | 'space-around' | 'center';
  paddingBottom?: number;
  children: ReactNode;
}) => {
  return <View style={{ justifyContent: type, paddingBottom }}>{children}</View>;
};

const View = styled(SafeAreaView, {
  backgroundColor: theme.COLORS.black,
  flex: 1,
  padding: theme.DIMENSIONS.defaultParentPadding,
});

export default ParentView;
