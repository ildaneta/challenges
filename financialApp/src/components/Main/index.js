import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

// import styles from './';

import income from '../../assets/images/income.png';
import expense from '../../assets/images/expanse.png';
import grocery from '../../assets/images/grocery.png';
import car from '../../assets/images/car.png';

import {
  Container,
  ContainerTransactionsText,
  TransactionsText,
  Buttons,
  ButtonsIcons,
  ButtonsContainer,
  WrapperButton,
  TitleDays,
  SafeAreaContainer,
  ContainerOutgoing,
  ContainerTitleOutgoing,
  ContainerSubTitleOutgoing,
  TitleOutgoing,
  SubTitleOutgoing,
  WrapperOutgoing,
  ContainerImage,
  Image,
} from './styles';

function Main() {
  return (
    <Container>
      <ContainerTransactionsText>
        <TransactionsText extraBold>Transações Recentes</TransactionsText>
        <TouchableOpacity>
          <TransactionsText>Veja todas</TransactionsText>
        </TouchableOpacity>
      </ContainerTransactionsText>

      <View>
        <ButtonsContainer>
          <WrapperButton first noImage style={style.shadow}>
            <Buttons>Todos</Buttons>
          </WrapperButton>

          <WrapperButton style={style.shadow}>
            <ButtonsIcons source={income} />
            <Buttons>Entradas</Buttons>
          </WrapperButton>

          <WrapperButton style={style.shadow}>
            <ButtonsIcons source={expense} />
            <Buttons>Saídas</Buttons>
          </WrapperButton>
        </ButtonsContainer>
      </View>

      <SafeAreaContainer>
        <TitleDays>TODAY</TitleDays>

        <WrapperOutgoing first>
          <ContainerImage>
            <Image source={grocery} />
          </ContainerImage>

          <ContainerOutgoing>
            <ContainerTitleOutgoing>
              <TitleOutgoing>Padaria</TitleOutgoing>
              <TitleOutgoing>- R$ 50,58</TitleOutgoing>
            </ContainerTitleOutgoing>

            <ContainerSubTitleOutgoing>
              <SubTitleOutgoing>Super pão</SubTitleOutgoing>
              <SubTitleOutgoing>13 Jul</SubTitleOutgoing>
            </ContainerSubTitleOutgoing>
          </ContainerOutgoing>
        </WrapperOutgoing>

        <WrapperOutgoing>
          <ContainerImage>
            <Image source={car} />
          </ContainerImage>

          <ContainerOutgoing>
            <ContainerTitleOutgoing>
              <TitleOutgoing>Transporte</TitleOutgoing>
              <TitleOutgoing>- R$ 12,55</TitleOutgoing>
            </ContainerTitleOutgoing>

            <ContainerSubTitleOutgoing>
              <SubTitleOutgoing>UBER</SubTitleOutgoing>
              <SubTitleOutgoing>02 Jul</SubTitleOutgoing>
            </ContainerSubTitleOutgoing>
          </ContainerOutgoing>
        </WrapperOutgoing>
      </SafeAreaContainer>
    </Container>
  );
}

export default Main;

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#fff',
    elevation: 2,
  },
});
