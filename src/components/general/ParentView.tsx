import React, { ReactNode } from 'react';
import { styled } from '@gluestack-style/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';

const ParentView = ({
  type = 'space-between',
  children,
}: {
  type: 'space-between' | 'flex-start' | 'space-evenly' | 'space-around';
  children: ReactNode;
}) => {
  return <View style={{ justifyContent: type }}>{children}</View>;
};

const View = styled(SafeAreaView, {
  backgroundColor: 'black',
  flex: 1,
  padding: theme.DIMENSIONS.defaultParentPadding,
});

export default ParentView;
