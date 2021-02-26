import React, { useState, useEffect, useMemo } from 'react';
import { Alert, Vibration, StyleSheet, View, PanResponder, Animated } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import socketio from "socket.io-client";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import Draggable from 'react-native-draggable';

import { api, sock } from '../../services/api'

import { Container, Text, Menu, Image, SBList, ButtonContainer } from './styles';
import { Loading, Screen, Header, Icon, Content, Button, Modal } from '../../components';

export function Dashboard() {
  const [modal, setModal] = useState(false);
  const [user, setUser]: any = useState([]);
  const [token, setToken] = useState('');
  const [name, setName] = useState('')
  const [height, setHeight] = useState(0)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState(false);
  const [currentRegion, setCurrentRegion]: any = useState({});
  const [pan, setPan] = useState(new Animated.ValueXY());
  const socket = useMemo(() => socketio(sock, { transports: ['websocket'] }), [])

  useEffect(() => {
    async function getUser() {
      try {
        const dataUser = await AsyncStorage.getItem('sb@user') || ''
        if (dataUser !== null) {
          setUser(JSON.parse(dataUser))
          setName(JSON.parse(dataUser).name.split(' ')[0])
          setToken(await AsyncStorage.getItem('sb@token') || '')

          const SBS = JSON.parse(dataUser)
          SBS.smartbox.map((item: any) => {
            socket.on(item.id, (data: number) => {
              console.log(data, item.sbid)
            })
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const coordinate = coords;
        setCurrentRegion({
          lat: Number(coordinate.latitude),
          long: Number(coordinate.longitude),
        });
      }
    }

    loadInitialPosition();

    getUser()
  }, [])

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  const handleBarCodeScanned = async (data: string) => {
    setScanned(true);
    setBarcode(false);
    setScanned(false);
    try {
      const response = await api.patch('sb/active', {
        sbid: data.data,
        owner: user.id,
        lat: currentRegion.lat,
        long: currentRegion.long
      })

      if (response.data.status === 200) {
        const updateUser = await api.get(`/users/get_user/${user.id}`)
        setUser(updateUser.data.user)
        Alert.alert('Sucesso', 'SmartBox adicionada com sucesso')
      } else {
        console.log(response)
      }
    } catch (err) {
      console.log(err)
    }
  };

  async function sendComand(id: number/*, state: string*/) {
    try {
      const response = await api.post('sb/send', {
        sbid: id,
        value: {value: 'ON'},
        user: user.id
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Screen
      hiddeStatusbar={false}
      barStyle='dark-content'
      bgColor='#46e8c9'
    >
      <Header
        rightIcon='menu'
        avatarLeft
        avatar={user.image}
        title={`Olá ${name} `}
        bgColor='#46e8c9'
        color='#000'
        iconColor='#FFF'
        onRightPress={() => { height === 0 ? setHeight(100) : setHeight(0) }}
      />
      {
        barcode ?
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          :
          <Content bgColor='#FFF' >
            <Menu height={height}>
              {
                height === 100 &&
                <>
                  <Button
                    type='comand'
                    onPress={() => { Alert.alert('hello', 'world'); Vibration.vibrate(100) }}
                  >
                    <Image resizeMode='contain' source={require('../../components/icon/settings.png')} />
                  </Button>
                  <Button
                    type='comand'
                    onPress={() => { Alert.alert('hello', 'world'); Vibration.vibrate(100) }}
                  >
                    <Image resizeMode='contain' source={require('../../components/icon/shopping-list.png')} />
                  </Button>
                  <Button
                    type='comand'
                    onPress={() => { Alert.alert('hello', 'world'); Vibration.vibrate(100) }}
                  >
                    <Image resizeMode='contain' source={require('../../components/icon/alarm.png')} />
                  </Button>
                  <Button
                    type='comand'
                    onPress={() => { setBarcode(true); setHeight(0); Vibration.vibrate(100) }}
                  >
                    <Image resizeMode='contain' source={require('../../components/icon/qr-code.png')} />
                  </Button>
                </>
              }
            </Menu>
            <Content style={{ alignItems: 'center', justifyContent: 'center' }} scroolable>
              <SBList
                data={user.smartbox}
                keyExtractor={(item: any) => item.id}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{
                  height: 80,
                }}
                renderItem={({ item }: any) => (
                  <ButtonContainer>
                    <Button
                      style={{ marginLeft: 8 }}
                      bgColor='#46e8c9'
                      type='comand'
                      onPress={() => { sendComand(item.id); Vibration.vibrate(100) }}
                    >
                      <Image resizeMode='contain' source={require('../../components/icon/lampada.png')} />
                    </Button>
                    <Text> {item.sbid} </Text>
                  </ButtonContainer>
                )}
              />
            </Content>
          </Content>
      }
    </Screen >
  );
}