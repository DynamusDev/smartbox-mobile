import styled from 'styled-components/native';
import { TextInput } from 'react-native'

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 30px;
`;

export const Input = styled(TextInput).attrs({})`
  font-size: 20px;
  width: 70%;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 22px;
`;

export const Image = styled.Image`
  height: 70px;
  width: 80%;
  margin-bottom: 45px;
`;