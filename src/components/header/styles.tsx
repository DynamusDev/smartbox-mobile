import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  width: 100%;

  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.1px;
  border-color: #1aa48a;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: 'Ubuntu_400Regular';
`;

export const Space = styled.View`
  height: 25px;
  width: 25px;
`;

export const Image = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
`;
