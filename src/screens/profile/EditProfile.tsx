import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import ParentView from '../../components/ParentView';
import { theme } from '../../constants/theme';
import InputData from '../../components/InputData';
import { Toast, ToastDescription, VStack, useToast } from '@gluestack-ui/themed';
import CurrencyPicker from './components/CurrencyPicker';
import DistanceUnitPicker from './components/DistanceUnitPicker';
import PhotoPicker, { PICTURES } from './components/PhotoPicker';
import EditSettings from './components/EditSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../redux/slices/userSlice';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);
  const [showDistancePicker, setShowDistancePicker] = useState(false);
  const { imageId, name, currency, unit } = useSelector((state: any) => state.user);
  const toast = useToast();

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
          <InputData
            value={name}
            setValue={(value) => dispatch(setUserName(value))}
            placeholder="Enter name"
            keyboardType="default"
            keyType="done"
          />
          <EditSettings
            currencyPress={() => setShowCurrencyPicker(true)}
            distancePress={() => setShowDistancePicker(true)}
            fuelPress={() => {
              toast.show({
                placement: 'top',
                render: ({ id }) => {
                  const toastId = 'toast-' + id;
                  return (
                    <Toast
                      nativeID={toastId}
                      action="info"
                      variant="solid"
                      bg={theme.COLORS.cardBg}
                    >
                      <VStack space="xs">
                        <ToastDescription color={theme.COLORS.text}>
                          Fuel unit is chosen based on distance unit
                        </ToastDescription>
                      </VStack>
                    </Toast>
                  );
                },
              });
            }}
            currency={`${currency.name} (${currency.symbol})`}
            unit={unit}
          />
        </VStack>
      </VStack>
      <CurrencyPicker
        onOpen={showCurrencyPicker}
        onClose={() => setShowCurrencyPicker(!showCurrencyPicker)}
        dispatch={dispatch}
      />
      <DistanceUnitPicker
        onOpen={showDistancePicker}
        onClose={() => setShowDistancePicker(!showDistancePicker)}
        dispatch={dispatch}
      />
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
