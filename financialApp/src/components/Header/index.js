import React from 'react';
import {Text, StatusBar} from 'react-native';

import notification from '../../assets/images/notification.png';
import ilda from '../../assets/images/ilda.jpeg';
import loan from '../../assets/images/loan.png';
import walletRequest from '../../assets/images/wallet-request.png';
import walletSend from '../../assets/images/wallet-send.png';

import {
  Container,
  ContainerProfileHome,
  ContainerProfile,
  ContainerSold,
  Sold,
  AvailableBalance,
  ContainerPhotoNotification,
  Photo,
  Notification,
  WrapperMenusIcons,
  ContainerMenusIcons,
  MenusIcons,
  Icons,
  ContainerLabelIcon,
  LabelIcon,
} from './styles';

function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2750a0" />
      <Container>
        <ContainerProfileHome>
          <ContainerProfile>
            <ContainerSold>
              <Sold>R$ 2.567.890,05</Sold>
            </ContainerSold>

            <ContainerPhotoNotification>
              <Notification source={notification} />
              <Photo source={ilda} />
            </ContainerPhotoNotification>
          </ContainerProfile>
          <AvailableBalance>Saldo Disponível</AvailableBalance>
        </ContainerProfileHome>

        <WrapperMenusIcons>
          <ContainerMenusIcons>
            <MenusIcons>
              <Icons source={walletSend} />
            </MenusIcons>
            <ContainerLabelIcon>
              <LabelIcon>Enviar</LabelIcon>
            </ContainerLabelIcon>
          </ContainerMenusIcons>

          <ContainerMenusIcons>
            <MenusIcons>
              <Icons source={walletRequest} />
            </MenusIcons>
            <ContainerLabelIcon>
              <LabelIcon>Receber</LabelIcon>
            </ContainerLabelIcon>
          </ContainerMenusIcons>

          <ContainerMenusIcons>
            <MenusIcons>
              <Icons source={loan} />
            </MenusIcons>
            <ContainerLabelIcon>
              <LabelIcon>Crédito</LabelIcon>
            </ContainerLabelIcon>
          </ContainerMenusIcons>

          <ContainerMenusIcons>
            <MenusIcons>
              <Icons source={walletRequest} />
            </MenusIcons>
            <ContainerLabelIcon>
              <LabelIcon>Add +</LabelIcon>
            </ContainerLabelIcon>
          </ContainerMenusIcons>
        </WrapperMenusIcons>
      </Container>
    </>
  );
}

export default Header;
