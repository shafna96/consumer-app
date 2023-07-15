import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {
  Account,
  Delivery,
  SelfPickUp,
  TableService,
  Search,
} from '../screens/homeScreen';
import {Colors} from '../constants/styles';

import {
  Scooter,
  ScooterWhite,
  ShoppingBag,
  ShoppingBagWhite,
  KitchenTable,
  KitchenTableWhite,
  User,
  UserWhite,
} from '../assets/images';

import {useDispatch} from 'react-redux';
import {getHomeData} from '../store/actions/homeAction';

const Stack = createNativeStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const MyTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Delivery"
      appearance={{
        bottomPadding: 19,
        topPadding: 14,
        shadow: true,
        dotSize: 'small',
      }}
      tabBarOptions={{
        activeTintColor: '#ffffff',
        activeBackgroundColor: Colors.primaryOrange,
        height: 28,
        paddingTop: 9,
        paddingBottom: 4,
        labelStyle: styles.labelStyle,
      }}>
      <Tabs.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: ({focused}) => (focused ? <ScooterWhite /> : <Scooter />),
        }}
      />
      <Tabs.Screen
        name="PickUp"
        component={SelfPickUp}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShoppingBagWhite /> : <ShoppingBag />,
        }}
      />
      <Tabs.Screen
        name="Table Service"
        component={TableService}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <KitchenTableWhite /> : <KitchenTable />,
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (focused ? <UserWhite /> : <User />),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function HomeStack() {
  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(getHomeData());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 11,
    fontFamily: 'Proxima Nova Bold',
  },
});
