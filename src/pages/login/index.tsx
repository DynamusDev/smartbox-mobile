import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import colors from '../../theme/colors'

import { Container, Input, Image, Row, Text } from './styles';
import { Screen, Button } from '../../components';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUser() {
      try {
        const dataUser = await AsyncStorage.getItem('sb@user')
        if (dataUser !== null) {
          navigation.navigate('demo')
        }
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [])

  async function handleLogin() {
    if (email === '') {
      Alert.alert('Falha ao logar', 'Por favor, informe o email')
    } else if (password === '') {
      Alert.alert('Falha ao logar', 'Por favor, informe a senha')
    } else {
      setLoading(true)
      try {
        const response = await api.post('login', {
          email,
          password
        })
        if (response.data.status === 201) {
          setLoading(false)
          await AsyncStorage.setItem('sb@user', JSON.stringify(response.data.user))
          await AsyncStorage.setItem('sb@token', response.data.token)
          navigation.navigate('demo')
        } else {
          setLoading(false)
          Alert.alert('Falha ao logar', response.data.error)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Screen hiddeStatusbar={false} barStyle='light-content' bgColor={colors.primary} barColor={colors.primary} >
      <Container >
        <Image source={require('./logo2.png')} resizeMode='contain' />
        <Input multiline={false} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' placeholder='Email' />
        <Input secureTextEntry value={password} onChangeText={setPassword} multiline={false} placeholder='Senha' autoCapitalize='none' />
        <Button type='common' onPress={handleLogin} loading={loading} text='Login' bgColor='#000' />
        <Row>
          <Button type='common' onPress={() => { navigation.navigate('signup') }} text='Cadastrar' bgColor={colors.primary} />
          <Button type='common' onPress={() => { navigation.navigate('forgot') }} text='Esqueci minha senha' bgColor={colors.primary} />
        </Row>
      </Container>
    </Screen>
  );
}