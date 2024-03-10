import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import ParentView from '../../components/ParentView';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import { VStack } from '@gluestack-ui/themed';
import User1 from '../../../assets/svg/userIcons/User1.svg';
import CurrencyPicker from './components/CurrencyPicker';
import DistanceUnitPicker from './components/DistanceUnitPicker';
import PhotoPicker, { PICTURES } from './components/PhotoPicker';
import EditSettings from './components/EditSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture } from '../../redux/slices/userSlice';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);
  const [showDistancePicker, setShowDistancePicker] = useState(false);
  const { imageId } = useSelector((state: any) => state.user);

  const PrPic = PICTURES.find((value) => {
    return value.imageId === imageId;
  });

  return (
    <ParentView type="flex-start">
      <StatusBar backgroundColor={theme.COLORS.black} />
      <VStack justifyContent="space-evenly" flex={0.8}>
        <TouchableOpacity
          onPress={() => setShowPhotoPicker(true)}
          style={{ alignSelf: 'center', alignItems: 'center' }}
        >
          {PrPic?.Image}
          <Text
            style={{
              fontFamily: theme.FONTS.default,
              color: theme.COLORS.text,
              fontSize: 18,
              marginVertical: 16,
            }}
          >
            Edit Photo
          </Text>
        </TouchableOpacity>

        <VStack gap={22}>
          <InputData placeholder="Name" keyboardType="default" keyType="next" />
          <EditSettings />
        </VStack>
      </VStack>
      <CurrencyPicker />
      <DistanceUnitPicker />
      <PhotoPicker
        onOpen={showPhotoPicker}
        onClose={() => setShowPhotoPicker(!showPhotoPicker)}
        dispatch={dispatch}
      />
    </ParentView>
  );
};

const styles = StyleSheet.create({});

export default EditProfile;
