import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MainScreen from '../screens/MainScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { AntDesign } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ navigation }: RootTabScreenProps<'MainScreen'>) => ({
          title: 'Minha Lista',
          headerTitleStyle: { color: 'red',fontSize: 22 },
          tabBarLabelStyle: { color: 'red', fontSize: 17 },
          tabBarStyle: { backgroundColor: 'black' },
          headerStyle: { backgroundColor: 'black' },
          tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="red" />,
        })}
      />
    </BottomTab.Navigator>
  );
}