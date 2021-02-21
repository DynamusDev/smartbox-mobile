import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 45px;
  width: 50%;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  margin: 1px;
`;

export const Comand = styled.TouchableOpacity`
  height: 70px;
  width: 70px;

  align-items: center;
  justify-content: center;
  border-color: #1aa48a;
  background: #FFF;

  border-radius: 10px;
  margin: 1px;
`;

export const MenuContainer = styled.TouchableOpacity`
  height: 160px;
  width: 50%;

  align-items: center;
  justify-content: space-around;

  border-radius: 10px;
  border-width: 0.3px;
  border-color: #333;
  margin: 1px;
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: 'Ubuntu_400Regular'
`;

export const MenuText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: 'Ubuntu_400Regular'
`;
