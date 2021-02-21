import React from 'react';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import { Container, SafeArea } from './styles';

interface Props {
  barStyle?: 'light-content' | 'dark-content',
  barColor?: string,
  bgColor?: string,
  style?: React.CSSProperties,
  children?: any,
  hiddeStatusbar?: boolean,
}

export function Screen(props: Props) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled style={{ flex: 1, backgroundColor: props.bgColor || '#1e111d' }}>
      {
        !props.hiddeStatusbar ?
          <SafeArea
            style={{
              ...props.style,
              backgroundColor: props.bgColor || '#46e8c9',
            }}
          >
            <StatusBar
              barStyle={props.barStyle || 'dark-content'}
              backgroundColor={props.barColor || '#46e8c9'}
              hidden={props.hiddeStatusbar}
            />
            {props.children}
          </SafeArea>
          :
          <Container
            style={{
              ...props.style,
              backgroundColor: props.bgColor || '#1e111d',
            }}
          >
            <StatusBar
              barStyle={props.barStyle || 'dark-content'}
              backgroundColor={props.barColor || 'transparent'}
              hidden={props.hiddeStatusbar}
            />
            {props.children}
          </Container>
      }
    </KeyboardAvoidingView>
  )
};