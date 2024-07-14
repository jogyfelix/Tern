import React, { ReactElement, useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import ParentView from '../../components/ParentView';
import strings from '../../constants/strings';
import screenNames from '../../constants/screenNames';
import { theme } from '../../constants/theme';
import { HStack, VStack } from '@gluestack-ui/themed';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CalcCard from './components/CalcCard';
import EmptyCard from './components/EmptyCard';
import { useSelector } from 'react-redux';
import User1 from '../../../assets/svg/userIcons/User1.svg';
import moment from 'moment';
import { PICTURES } from '../profile/components/PhotoPicker';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Home = ({ navigation }: Props) => {
  const userDetails = useSelector((state: any) => state.user);
  const { lastDate, lastCalculated, lastCurrency } = useSelector(
    (state: any) => state.fuelCalculator
  );
  const [PrPic, setPrPic] = useState<ReactElement>();

  useEffect(() => {
    const component = PICTURES.find((value) => {
      return value.imageId === userDetails.imageId;
    });
    setPrPic(component?.Image);
  }, [userDetails.imageId]);

  return (
    <ParentView type="flex-start" paddingBottom={112}>
      <HStack justifyContent="space-between" alignItems="center" marginBottom={16}>
        <VStack space="sm">
          <Text style={styles.greetingText}>{strings.GREETING}</Text>
          <Text style={styles.nameText}>{userDetails.name}</Text>
        </VStack>

        {PrPic && <>{PrPic}</>}
      </HStack>
      <EmptyCard type="garage" onPress={() => navigation.navigate(screenNames.SERVICE_SCREEN)} />
      <EmptyCard
        type="ledger"
        onPress={() => navigation.navigate(screenNames.FUEL_LEDGER_SCREEN)}
      />
      <CalcCard
        lastSum={`${lastCurrency}${lastCalculated === 0 ? '' : lastCalculated}`}
        lastDate={
          moment(lastDate).format('DD MMM') === 'Invalid date'
            ? ''
            : moment(lastDate).format('DD MMM')
        }
        onPress={() => navigation.navigate(screenNames.CALCULATOR_SCREEN)}
      />
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
