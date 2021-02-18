import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import socketio from "socket.io-client";
import { api, sock } from './services/api'

export default function App() {
  const [value, setValue] = useState(0);
  const [id, setId] = useState('');
  const socket = useMemo(() => socketio(sock, { transports: ['websocket'] }), [])

  useEffect(() => {
    socket.on('universal', (data: any) => {
      setId(data)
    })
    socket.on('1', (data: number) => {
      console.log(data)
      setValue(data)
      if (data === 256) {
        socket.emit('1', 'Ligou')
      } else {
        socket.emit('1', 'Desligou')
      }
    })
  }, [socket])

  async function sendOn() {
    Vibration.vibrate(100)
    try {
      const response = await api.post('sb/send', {
        id: '1',
        value: 256
      })
    } catch (err) {
      console.log(err)
    }
  }

  async function createId() {
    Vibration.vibrate(100)
    try {
      const response = await api.get('sb/sign')
    } catch (err) {
      console.log(err)
    }
  }

  async function sendOff() {
    Vibration.vibrate(100)
    try {
      const response = await api.post('sb/send', {
        id: '1',
        value: 0
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Valor </Text>
      <Text style={styles.label}> {value} </Text>
      <StatusBar barStyle='dark-content' />
      <TouchableOpacity style={styles.button} onPress={() => { sendOn() }}><Text style={styles.text}>ON</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { sendOff() }}><Text style={styles.text}>OFF</Text></TouchableOpacity>

      <Text style={{ ...styles.label, marginTop: 40 }}> ID </Text>
      <Text style={styles.label}> {id} </Text>
      <TouchableOpacity style={styles.button} onPress={() => { createId() }}><Text style={styles.text}>Criar ID</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#FFF',
    fontSize: 16
  },

  label: {
    color: '#111',
    fontSize: 20,
    marginBottom: 8
  },

  button: {
    height: 40,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
    marginBottom: 10,
    borderRadius: 10
  }
});
