import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Input, Image } from './styles';
import { Screen, Button } from '../../components';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUser() {
      try {
        const dataUser = await AsyncStorage.getItem('user') || ''
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
          await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
          await AsyncStorage.setItem('token', response.data.token)
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
    <Screen hiddeStatusbar={false} barStyle='light-content' bgColor='#46e8c9' barColor='#46e8c9' >
      <Container >
        <Image source={require('./logo.png')} resizeMode='contain' />
        <Input multiline={false} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' placeholder='Email' />
        <Input secureTextEntry value={password} onChangeText={setPassword} multiline={false} placeholder='Senha' autoCapitalize='none' />
        <Button type='common' onPress={handleLogin} loading={loading} text='IR' bgColor='#000' />
        <Button type='common' onPress={() => { }} text='Esqueci minha senha' bgColor='#46e8c9' />
      </Container>
    </Screen>
  );
}