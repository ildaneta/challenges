import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

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

function Menu(props) {
  const navigation = useNavigation();

  const menu = [
    {
      hasTitle: true,
      name: 'Home',
      icon: menuHome,
      id: 1,
    },
    {
      hasTitle: true,
      name: 'Extrato',
      icon: menuExtract,
      id: 2,
    },
    {
      hasTitle: false,
      icon: menuPlus,
      id: 3,
    },
    {
      hasTitle: true,
      name: 'Cards',
      icon: menuCards,
      id: 4,
    },
    {
      hasTitle: true,
      name: 'Perfil',
      icon: menuProfile,
      id: 5,
    },
  ];

  const [active, setActive] = useState(
    Array.from({length: menu.length}, () => false),
  );

  return (
    <Container>
      <WrapperMenuIcon>
        {menu.map((item, index) => (
          <MenuIcon
            onPress={() => {
              navigation.navigate(item.name);
            }}>
            {item.hasTitle ? (
              <>
                <Icon source={item.icon} active={active} />

                <TitleMenuIcon active={active}>{item.name}</TitleMenuIcon>
              </>
            ) : (
              <Icon source={item.icon} menuCenter active />
            )}
          </MenuIcon>
        ))}
      </WrapperMenuIcon>
    </Container>
  );
}

export default Menu;
