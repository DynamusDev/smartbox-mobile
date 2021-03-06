import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Login, Dashboard, SignUp, ForgotPassword } from './pages';

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
      initialRouteName="login"
    >
      <Screen name="login" component={Login} />
      <Screen name="demo" component={Dashboard} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgot" component={ForgotPassword} />
    </Navigator>
  );
}

export function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Historic') {
            iconName = 'file-text';
          } else if (route.name === 'Config') {
            iconName = 'settings'
          } else if (route.name === 'TalkWithUs') {
            iconName = 'message-square'
          } else if (route.name === 'Demo') {
            iconName = 'settings'
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#eb6726',
        inactiveTintColor: '#f5f5f5',
        style: {
          backgroundColor: '#1e111d'
        }
      }}
    >
      <Tab.Screen name="Home" component={Login} />
      <Tab.Screen name="Demo" component={Dashboard} />
    </Tab.Navigator>
  );
}

export function DashboardStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Screen name="login" component={Login} />
      <Screen name="demo" component={Dashboard} />
    </Navigator>
  );
}