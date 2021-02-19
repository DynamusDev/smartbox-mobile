import React from 'react';
import { Alert } from 'react-native'
import { shade } from 'polished'
import * as Localization from "expo-localization"

import { Container, Text } from './styles';
import { Loading, Screen, Header, Icon, Content, Button, Input } from '../../components';

export function Login() {
  return (
      <Screen hiddeStatusbar={false} barStyle='light-content' bgColor='#1aa48a' >
        <Content scroolable bgColor='#FFF'>
        
        </Content>
      </Screen>
  );
}