import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.View`
  height: ${(props: any) => props.height}px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background: #46e8c9;
  z-index: 5;

  flex-direction: row;
`;

export const Image = styled.Image`
  height: 70%;
  width: 70%;
`;

export const Text = styled.Text`
  font-size: 10px;
  text-align: center;
  font-family: 'Ubuntu_400Regular';
  margin-left: 5px;
`;

export const ButtonContainer = styled.View`
  width: 90px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const SBList = styled.FlatList.attrs({
  style: {
    height: 100,
    width: '100%',
    padding: 5,
  },
  contentContainerStyle: {
    height: 100,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``