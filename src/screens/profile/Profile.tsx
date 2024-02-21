import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { Icon, VStack } from '@gluestack-ui/themed';
import { User2 } from 'lucide-react-native';
import SecondaryBtn from '../../components/SecondaryBtn';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userDetails = useSelector((state: any) => state.user);
  return (
    <VStack
      flex={1}
      backgroundColor={theme.COLORS.black}
      paddingHorizontal={theme.DIMENSIONS.defaultHorizontalMargin}
    >
      <StatusBar backgroundColor={theme.COLORS.black} />
      <VStack alignItems="center" marginVertical={88} alignSelf="center">
        <View style={{ backgroundColor: theme.COLORS.cardBg, padding: 10, borderRadius: 20 }}>
          <Icon as={User2} style={{ padding: 16 }} color={theme.COLORS.text} />
        </View>

        <Text style={{ fontFamily: theme.FONTS.default, color: theme.COLORS.text, fontSize: 24 }}>
          {userDetails.name}
        </Text>
      </VStack>
      <SecondaryBtn title="Sync data" />
    </VStack>
  );
};

export default Profile;
