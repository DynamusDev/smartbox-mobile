import styled from 'styled-components/native';
import { ScrollView } from 'react-native'
import { dark } from '../../theme/dark'

export const Container = styled.View`
  flex: 1;
  background:  ${dark.primary};
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
`;
