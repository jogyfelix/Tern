import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import Fab from '../../components/Fab';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AddIcon, HStack, Icon } from '@gluestack-ui/themed';
import { Fuel } from 'lucide-react-native';
import { theme } from '../../constants/theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import { useDispatch, useSelector } from 'react-redux';
import AddVehicleList from './components/AddVehicleList';
import strings from '../../constants/strings';
import GarageEmpty from '../../../assets/svg/garage-empty.svg';
import { serviceType } from '../../redux/slices/servicesSlice';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const SCROLL_DISTANCE = theme.DIMENSIONS.MAX_HEADER_HEIGHT - theme.DIMENSIONS.MIN_HEADER_HEIGHT;

const Service = ({ navigation }: Props) => {
  const { width, height } = useWindowDimensions();
  const scrollOffsetY = useSharedValue(0);
  const vehicles = useSelector((state: any) => state.vehicles.vehiclesList);
  const services = useSelector((state: any) => state.services.services);

  const [serviceList, setServiceList] = useState<any>([]);

  const sortByDate = (list: serviceType[]) => {
    const sortData = list;
    return sortData.sort(
      (a, b) => new Date(a.nextServiceDate).getTime() - new Date(b.nextServiceDate).getTime()
    );
  };
  const formatList = () => {
    const sortedDates = sortByDate(services);
    const groupedTransactions = {};

    sortedDates.forEach((transaction: serviceType) => {
      const date = new Date(transaction.nextServiceDate).toDateString();
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
    setServiceList(finalResult);
  };
  useEffect(formatList, [services]);

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffsetY.value, [0, SCROLL_DISTANCE], [1, 0], Extrapolate.CLAMP),
    };
  });
  return (
    <View style={{ backgroundColor: theme.COLORS.black, flex: 1 }}>
      <StatusBar backgroundColor={theme.COLORS.black} />

      <View style={{ height: theme.DIMENSIONS.MIN_HEADER_HEIGHT, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 22,
            color: theme.COLORS.text,
            fontFamily: theme.FONTS.default,
            marginHorizontal: theme.DIMENSIONS.defaultHorizontalMargin,
          }}
        >
          {strings.GARAGE}
        </Text>
      </View>

      <SectionList
        sections={serviceList}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={{
          marginTop: 16,
          marginHorizontal: 16,
        }}
        ListHeaderComponent={
          vehicles.length > 0 ? (
            <AddVehicleList
              data={vehicles}
              onPress={() => navigation.navigate(screenNames.ADD_VEHICLE_SCREEN)}
              addServicePress={() => navigation.navigate(screenNames.ADD_SERVICE_SCREEN)}
            />
          ) : null
        }
        ListEmptyComponent={
          vehicles.length <= 0 ? (
            <View
              style={{
                height: height * 0.8,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onTouchEnd={() => navigation.navigate(screenNames.ADD_VEHICLE_SCREEN)}
            >
              <GarageEmpty />
              <Text
                style={{
                  color: theme.COLORS.white,
                  fontFamily: theme.FONTS.default,
                  fontSize: 18,
                  marginTop: 8,
                  textAlign: 'center',
                }}
              >
                Your garage is empty{'\n'}
                <Text style={{ color: theme.COLORS.text1 }}>Tap to add vehicles</Text>
              </Text>
            </View>
          ) : null
        }
        scrollEventThrottle={16}
        onScroll={(event) => {
          scrollOffsetY.value = withTiming(event.nativeEvent.contentOffset.y, { duration: 100 });
          // if (event.nativeEvent.contentOffset.y > theme.DIMENSIONS.MIN_HEADER_HEIGHT) {
          //   setStatusBarColor(theme.COLORS.cardBg);
          // } else {
          //   setStatusBarColor(theme.COLORS.cardBg1);
          // }
        }}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.item}>
              <HStack alignItems="center" gap={10}>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: 'rgba(129,178,202,0.4)',
                    borderRadius: 10,
                  }}
                >
                  <Icon as={Fuel} color="#81B2CA" style={{ padding: 14 }} />
                </View>

                <Text style={styles.title}>{item.vehicleName}</Text>
              </HStack>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />
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
    marginVertical: 12,
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

export default Service;
