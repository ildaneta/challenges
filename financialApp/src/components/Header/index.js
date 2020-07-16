import React from 'react';
import {StatusBar} from 'react-native';

import notification from '../../assets/images/notification.png';
import ilda from '../../assets/images/ilda.jpeg';
import investment from '../../assets/images/investment.png';
import barcode from '../../assets/images/barcode.png';
import transfer from '../../assets/images/transfer.png';
import loan from '../../assets/images/loan.png';

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
  Teste,
  Img,
} from './styles';

function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2750a0" />
      <Container>
        <ContainerProfileHome>
          <ContainerProfile>
            <ContainerSold>
              <Sold>R$ 27.142,05</Sold>
            </ContainerSold>

            <ContainerPhotoNotification>
              <Notification source={notification} />
              <Photo source={ilda} />
            </ContainerPhotoNotification>
          </ContainerProfile>

          <AvailableBalance>Saldo Disponível</AvailableBalance>
        </ContainerProfileHome>

        <Teste>
          <WrapperMenusIcons>
            <ContainerMenusIcons>
              <MenusIcons>
                <Icons source={transfer} />
              </MenusIcons>
              <ContainerLabelIcon>
                <LabelIcon>Transferência</LabelIcon>
              </ContainerLabelIcon>
            </ContainerMenusIcons>

            <ContainerMenusIcons>
              <MenusIcons>
                <Icons source={barcode} />
              </MenusIcons>
              <ContainerLabelIcon>
                <LabelIcon>Boleto</LabelIcon>
              </ContainerLabelIcon>
            </ContainerMenusIcons>

            <ContainerMenusIcons>
              <MenusIcons>
                <Icons source={investment} />
              </MenusIcons>
              <ContainerLabelIcon>
                <LabelIcon>Investimentos</LabelIcon>
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
          </WrapperMenusIcons>
        </Teste>
      </Container>
    </>
  );
}

export default Header;
