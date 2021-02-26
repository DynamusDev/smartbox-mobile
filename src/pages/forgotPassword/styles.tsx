import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import colors from '../../theme/colors';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: #FFF;
`;

export const Input = styled(TextInput).attrs({})`
  font-size: 20px;
  width: 70%;
  height: 40px;
  background: #FFF;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 22px;
  font-family: 'Ubuntu_400Regular';
`;

export const Image = styled.Image`
  height: 70px;
  width: 80%;
  margin-bottom: 45px;
`;