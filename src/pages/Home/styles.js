import styled from 'styled-components';
import Slider from 'react-slick';

import { Text } from '../../components';
import theme from '../../theme';

export const Container = styled.aside`
  background-color: ${(props)=> props.theme.colors.background}; //*recebendo propriedade do obj theme passada pelo App do
  font-family:${({theme:{fonts}})=> fonts.regular};
  width: 360px;
  height: 100vh;
  overflow-y: scroll; 
`;

