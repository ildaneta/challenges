import React from 'react';
import QRCode from 'react-native-qrcode-generator';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  TitlesMenu,
  TitleMenuStrong,
  WrapperTitlesMenu,
  NavTextSmall,
  Teste,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 160],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="http://ildaneta.netlify.com/"
          size={80}
          bgColor="#8b10ae"
          fgColor="#fff"
        />
      </Code>
      <WrapperTitlesMenu>
        <TitlesMenu>
          Banco <TitleMenuStrong>260 - Nu pagamentos S.A.</TitleMenuStrong>{' '}
        </TitlesMenu>
        <TitlesMenu>
          Agência <TitleMenuStrong>0001</TitleMenuStrong>
        </TitlesMenu>
        <TitlesMenu>
          Conta <TitleMenuStrong>230214-1</TitleMenuStrong>
        </TitlesMenu>
      </WrapperTitlesMenu>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={22} color="#fff" />
          <NavText>Me ajuda</NavText>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={22} color="#fff" />
          <Teste>
            <NavText>Perfil</NavText>
            <NavTextSmall>Nome de preferência, telefone, e-mail</NavTextSmall>
          </Teste>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="monetization-on" size={22} color="#fff" />
          <NavText>Configurar NuConta</NavText>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={22} color="#fff" />
          <NavText>Configurar cartão</NavText>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="store" size={22} color="#fff" />
          <NavText>Pedir conta PJ</NavText>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={22} color="#fff" />
          <NavText>Configurações do app</NavText>
          <Icon name="keyboard-arrow-right" size={22} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
