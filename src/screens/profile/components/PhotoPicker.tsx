import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  HStack,
} from '@gluestack-ui/themed';
import { theme } from '../../../constants/theme';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import User1 from '../../../../assets/svg/userIcons/User1.svg';
import User2 from '../../../../assets/svg/userIcons/User2.svg';
import User3 from '../../../../assets/svg/userIcons/User3.svg';
import User4 from '../../../../assets/svg/userIcons/User4.svg';
import { imageId, setProfilePicture } from '../../../redux/slices/userSlice';
import { Pressable } from 'react-native';
import { Dispatch, UnknownAction } from 'redux';

const fling = Gesture.Fling().direction(Directions.DOWN).runOnJS(true);
// .onStart(() => {});
export const PICTURES = [
  { imageId: imageId.User1, Image: <User1 height={60} width={60} /> },
  { imageId: imageId.User2, Image: <User2 height={60} width={60} /> },
  { imageId: imageId.User3, Image: <User3 height={60} width={60} /> },
  { imageId: imageId.User4, Image: <User4 height={60} width={60} /> },
];

type props = { onOpen: boolean; onClose: () => void; dispatch: Dispatch<UnknownAction> };

const PhotoPicker = ({ onOpen, onClose, dispatch }: props) => {
  return (
    <Actionsheet isOpen={onOpen} onClose={onClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999} bgColor={theme.COLORS.cardBg}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <GestureHandlerRootView style={{ width: '100%' }}>
          <GestureDetector gesture={fling}>
            <HStack gap={16} margin={16} justifyContent="center">
              {PICTURES.map((item) => (
                <Pressable
                  key={item.imageId}
                  onPress={() => {
                    dispatch(setProfilePicture(item.imageId));
                    onClose();
                  }}
                >
                  {item.Image}
                </Pressable>
              ))}
            </HStack>
          </GestureDetector>
        </GestureHandlerRootView>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default PhotoPicker;
