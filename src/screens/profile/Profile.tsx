import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { Icon, VStack } from '@gluestack-ui/themed';
import { useSelector } from 'react-redux';
import GoogleIcon from '../../../assets/svg/google.svg';
import { PICTURES } from './components/PhotoPicker';

const Profile = () => {
  const userDetails = useSelector((state: any) => state.user);
  const [PrPic, setPrPic] = useState<ReactElement>();

  useEffect(() => {
    const component = PICTURES.find((value) => {
      return value.imageId === userDetails.imageId;
    });
    setPrPic(component?.Image);
  }, [userDetails.imageId]);
  return (
    <VStack flex={1} backgroundColor={theme.COLORS.black}>
      <StatusBar backgroundColor={theme.COLORS.secondary} />
      <VStack
        style={{
          flex: 0.4,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            backgroundColor: theme.COLORS.secondary,
            position: 'absolute',
            height: '85%',
            width: '100%',
            top: 0,
            borderBottomLeftRadius: 18,
            borderBottomRightRadius: 18,
          }}
        />

        {PrPic && <>{PrPic}</>}
      </VStack>
      <Text
        style={{
          fontFamily: theme.FONTS.default,
          textAlign: 'center',
          color: theme.COLORS.text,
          fontSize: 24,
          marginVertical: 16,
        }}
      >
        {userDetails.name}
      </Text>
      <VStack marginHorizontal={theme.DIMENSIONS.defaultHorizontalMargin} gap={16} marginTop={28}>
        <VStack style={{ backgroundColor: theme.COLORS.cardBg, padding: 12, borderRadius: 12 }}>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text,
              fontSize: 18,
              marginVertical: 16,
            }}
          >
            Settings
          </Text>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text,
              fontSize: 18,
              marginVertical: 16,
            }}
          >
            Privacy Policy
          </Text>
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text,
              fontSize: 18,
              marginVertical: 16,
            }}
          >
            About
          </Text>
        </VStack>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: theme.COLORS.cardBg,
            padding: 12,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <GoogleIcon height={40} width={40} />
          <VStack marginStart={16}>
            <Text
              style={{
                fontFamily: theme.FONTS.default,
                color: theme.COLORS.text,
                fontSize: 18,
              }}
            >
              Google
            </Text>
            <Text
              style={{
                fontFamily: theme.FONTS.default,
                color: theme.COLORS.text1,
                fontSize: 16,
              }}
            >
              Not Connected
            </Text>
          </VStack>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
};

export default Profile;
