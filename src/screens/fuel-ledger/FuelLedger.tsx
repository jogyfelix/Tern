import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
  SectionListData,
  SectionListProps,
  useWindowDimensions,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import Fab from '../../components/Fab';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { theme } from '../../constants/theme';
import { HStack, Icon, VStack } from '@gluestack-ui/themed';
import { Droplet, Fuel } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { fuelEntryType } from '../../redux/slices/fuelLedgerSlice';
import FuelEmpty from '../../../assets/svg/fuel-ledger-empty.svg';
import moment from 'moment';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const SCROLL_DISTANCE = theme.DIMENSIONS.MAX_HEADER_HEIGHT - theme.DIMENSIONS.MIN_HEADER_HEIGHT;

const FuelLedger = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const scrollOffsetY = useSharedValue(0);
  const [statusBarColor, setStatusBarColor] = useState(theme.COLORS.cardBg1);
  const { ledgerList } = useSelector((state: any) => state.fuelLedger);
  const userDetails = useSelector((state: any) => state.user);
  const [data, setData] = useState<any>([]);

  const sortByDate = (list: fuelEntryType[]): fuelEntryType[] => {
    const sortData = list.slice();
    return sortData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };
  const formatList = () => {
    const sortedDates = sortByDate(ledgerList);
    const groupedTransactions = {};

    sortedDates.forEach((transaction: fuelEntryType) => {
      const date = new Date(transaction.date).toDateString();
      if (!groupedTransactions[date]) {
        groupedTransactions[date] = [];
      }
      groupedTransactions[date].push(transaction);
    });

    const finalResult = Object.keys(groupedTransactions).map((date) => {
      if (date === new Date().toDateString()) {
        return {
          title: 'Today',
          data: groupedTransactions[date],
        };
      } else {
        return {
          title: date,
          data: groupedTransactions[date],
        };
      }
    });
    setData(finalResult);
  };

  useEffect(formatList, [ledgerList]);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        [theme.DIMENSIONS.MAX_HEADER_HEIGHT, theme.DIMENSIONS.MIN_HEADER_HEIGHT],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(
        scrollOffsetY.value,
        [0, SCROLL_DISTANCE],
        [theme.COLORS.cardBg1, theme.COLORS.cardBg]
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(scrollOffsetY.value, [0, SCROLL_DISTANCE], [28, 24], Extrapolate.CLAMP),
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={theme.COLORS.black} />
      <View style={{ height: theme.DIMENSIONS.MIN_HEADER_HEIGHT, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 22,
            color: theme.COLORS.text,
            fontFamily: theme.FONTS.default,
            marginHorizontal: theme.DIMENSIONS.defaultHorizontalMargin,
          }}
        >
          Fuel Ledger
        </Text>
      </View>

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ marginHorizontal: 16 }}
        scrollEventThrottle={16}
        ListFooterComponent={() => <View style={{ marginVertical: 110 }} />}
        onScroll={(event) => {
          scrollOffsetY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 100 });
          if (event.nativeEvent.contentOffset.y > theme.DIMENSIONS.MIN_HEADER_HEIGHT) {
            setStatusBarColor(theme.COLORS.cardBg);
          } else {
            setStatusBarColor(theme.COLORS.cardBg1);
          }
        }}
        ListEmptyComponent={
          <View
            style={{
              height: height * 0.8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FuelEmpty />
            <Text
              style={{
                color: theme.COLORS.white,
                fontFamily: theme.FONTS.default,
                fontSize: 18,
                marginTop: 8,
                textAlign: 'center',
              }}
            >
              Your fuel ledger is empty{'\n'}
              <Text
                style={{ color: theme.COLORS.text1 }}
              >{`Tap the '+' button to add fuel entries`}</Text>
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <HStack alignItems="center" gap={10}>
              <View style={{ padding: 12, backgroundColor: theme.COLORS.black, borderRadius: 10 }}>
                <Icon as={Droplet} color={theme.COLORS.secondary} style={{ padding: 14 }} />
              </View>
              <VStack>
                <Text style={styles.title}>{item.type}</Text>
                <Text style={styles.title}>{moment(item.time).format('hh:mm a')}</Text>
              </VStack>
            </HStack>

            <Text style={styles.cost}>
              {userDetails.currency.symbol}
              {item.amount}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />

      <Fab onPress={() => navigation.navigate(screenNames.FUEL_ENTRY_SCREEN)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.black,
  },
  item: {
    backgroundColor: theme.COLORS.cardBg,
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    color: theme.COLORS.text,
    fontFamily: theme.FONTS.default,
    textAlign: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    color: theme.COLORS.text,
    fontFamily: theme.FONTS.default,
  },
  cost: {
    fontSize: 16,
    color: theme.COLORS.text1,
    fontFamily: theme.FONTS.default,
  },
});

export default FuelLedger;
