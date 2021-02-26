import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors'

import { Container, Input, Image, Row, Text } from './styles';
import { Screen, Button } from '../../components';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleSignUp() {
    if (email === '') {
      Alert.alert('Falha ao cadasrar nova senha', 'Por favor, informe o email')
    } else {
      setLoading(true)
      try {
        const response = await api.post('forgot_password', {
          email,
        })
        if (response.data.status === 200) {
          setLoading(false)
          navigation.navigate('login')
          Alert.alert('Sucesso', response.data.message)
        } else {
          setLoading(false)
          Alert.alert('Falha ao cadastrar', response.data.error)
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
  }

  return (
    <Screen hiddeStatusbar={false} barStyle='dark-content' bgColor={colors.offwhite} barColor={colors.offwhite} >
      <Container >
        <Image source={require('./logo.png')} resizeMode='contain' />
        <Input multiline={false} placeholderTextColor={colors.secondary} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' placeholder='Email' />
        <Button type='common' onPress={handleSignUp} loading={loading} text='Cadastrar nova senha' bgColor='#000' />
        <Row>
          <Button type='common' color={colors.secondary} onPress={() => { navigation.navigate('login') }} text='Retornar a tela de login' bgColor={colors.offwhite} />
        </Row>
      </Container>
    </Screen>
  );
}