import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors'

import { Container, Input, Image, Row, Text } from './styles';
import { Screen, Button } from '../../components';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleSignUp() {
    if (email === '') {
      Alert.alert('Falha ao cadastrar', 'Por favor, informe o email')
    } else if (password === '') {
      Alert.alert('Falha ao cadastrar', 'Por favor, informe a senha')
    }else if (name === '') {
      Alert.alert('Falha ao cadastrar', 'Por favor, informe o seu nome')
    } else {
      setLoading(true)
      try {
        const response = await api.post('users/create', {
          name,
          email,
          password
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
        <Input value={name} placeholderTextColor={colors.secondary} onChangeText={setName} multiline={false} placeholder='Nome' autoCapitalize='words' />
        <Input multiline={false} placeholderTextColor={colors.secondary} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' placeholder='Email' />
        <Input secureTextEntry placeholderTextColor={colors.secondary} value={password} onChangeText={setPassword} multiline={false} placeholder='Senha' autoCapitalize='none' />
        <Button type='common' onPress={handleSignUp} loading={loading} text='Cadastrar' bgColor='#000' />
        <Row>
          <Button type='common' color={colors.secondary} onPress={() => { navigation.navigate('login') }} text='Retornar a tela de login' bgColor={colors.offwhite} />
        </Row>
      </Container>
    </Screen>
  );
}