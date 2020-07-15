import React from 'react';
import {View, Text} from 'react-native';

import menuHome from '../../assets/images/menu-home.png';
import menuExtract from '../../assets/images/menu-extract.png';
import menuPlus from '../../assets/images/menu-plus.png';
import menuCards from '../../assets/images/menu-cards.png';
import menuProfile from '../../assets/images/menu-profile.png';

import {
  Container,
  WrapperMenuIcon,
  MenuIcon,
  Icon,
  TitleMenuIcon,
} from './styles';

function Menu() {
  return (
    <Container>
      <WrapperMenuIcon>
        <MenuIcon>
          <Icon source={menuHome} />
          <TitleMenuIcon>Home</TitleMenuIcon>
        </MenuIcon>

        <MenuIcon>
          <Icon source={menuExtract} />
          <TitleMenuIcon>Extrato</TitleMenuIcon>
        </MenuIcon>

        <MenuIcon>
          <Icon source={menuPlus} menuCenter />
        </MenuIcon>

        <MenuIcon>
          <Icon source={menuCards} />
          <TitleMenuIcon>Cartões</TitleMenuIcon>
        </MenuIcon>

        <MenuIcon>
          <Icon source={menuProfile} />
          <TitleMenuIcon>Perfil</TitleMenuIcon>
        </MenuIcon>
      </WrapperMenuIcon>
    </Container>
  );
}

export default Menu;
