import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TabsContainer,
  TabItem,
  TabText,
  Logos,
  Help,
  Barcode,
} from './styles';

import smartphone from '../../assets/smartphone.png';
import emprestimo from '../../assets/emprestimo.png';
import help from '../../assets/help.png';
import barcode from '../../assets/barcode.png';
import padlock from '../../assets/padlock.png';

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 540],
              outputRange: [0, 100],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 540],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <Logos source={smartphone} />
          <TabText>Recarga de celular</TabText>
        </TabItem>

        <TabItem>
          <Logos source={emprestimo} />
          <TabText>Empréstimos</TabText>
        </TabItem>

        <TabItem>
          <Help source={help} />
          <TabText>Me ajuda</TabText>
        </TabItem>

        <TabItem>
          <Barcode source={barcode} />
          <TabText>Pagar</TabText>
        </TabItem>

        <TabItem>
          <Logos source={padlock} />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
