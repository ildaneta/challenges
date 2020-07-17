import React, {useState} from 'react';
import {StatusBar, Text, Switch, StyleSheet} from 'react-native';

import Menu from '../components/Menu';

import ellipsis from '../assets/images/ellipsis.png';
import bgCreditCard from '../assets/images/bg-creditCard.png';
import checkCreditCard from '../assets/images/check-creditCard.png';
import visa from '../assets/images/visa.png';
import contactlessPayment from '../assets/images/contactless-payment.png';
import atmWithDraws from '../assets/images/atm-with-draws.png';
import onlinePayments from '../assets/images/online-payments.png';

import {
  Container,
  BlueWrapper,
  WrapperTextMainButton,
  DivTitleMain,
  TitleMain,
  ButtonMain,
  SubTitleMain,
  ButtonImage,
  ButtonsContainer,
  WrapperButton,
  Buttons,
  ContainerCard,
  ContainerCheckNameCard,
  ContainerCheckCard,
  ContainerNameCard,
  IconsCard,
  ContainerImage,
  WrapperNumbersCard,
  ContainerAsteriskCard,
  ContainerAsteriskCardText,
  ContainerDescriptionDataCard,
  ContainerDescriptionsCardWrapper,
  TitleDescriptionsCard,
  DataDescriptionsCard,
  ContainerSwitchButtons,
  WrapperSwitchButtons,
  TextButtons,
  IconsButtons,
  SwitchButton,
  ViewTest,
  TitleSettingsCards,
} from './cards/styles';

export default function Cards() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2750a0" />
      <BlueWrapper />
      <Container>
        <WrapperTextMainButton>
          <DivTitleMain>
            <TitleMain>Seus Cartões</TitleMain>
            <ButtonMain>
              <ButtonImage source={ellipsis} />
            </ButtonMain>
          </DivTitleMain>
          <SubTitleMain>1 cartão físico, 1 cartão virtual</SubTitleMain>
        </WrapperTextMainButton>

        <ButtonsContainer>
          <WrapperButton first active style={styles.shadow}>
            <Buttons>Cartão Físico</Buttons>
          </WrapperButton>

          <WrapperButton>
            <Buttons>Cartão Virtual</Buttons>
          </WrapperButton>
        </ButtonsContainer>

        <ContainerImage source={bgCreditCard} />

        <ContainerCard>
          <ContainerCheckNameCard>
            <ContainerCheckCard>
              <IconsCard source={checkCreditCard} />
            </ContainerCheckCard>

            <ContainerCheckCard visa>
              <IconsCard source={visa} visa />
            </ContainerCheckCard>
          </ContainerCheckNameCard>

          <WrapperNumbersCard>
            <ContainerAsteriskCard>
              <ContainerAsteriskCardText>****</ContainerAsteriskCardText>
            </ContainerAsteriskCard>

            <ContainerAsteriskCard>
              <ContainerAsteriskCardText>****</ContainerAsteriskCardText>
            </ContainerAsteriskCard>

            <ContainerAsteriskCard>
              <ContainerAsteriskCardText>****</ContainerAsteriskCardText>
            </ContainerAsteriskCard>

            <ContainerAsteriskCard number>
              <ContainerAsteriskCardText number>2864</ContainerAsteriskCardText>
            </ContainerAsteriskCard>
          </WrapperNumbersCard>

          <ContainerDescriptionDataCard>
            <ContainerDescriptionsCardWrapper>
              <TitleDescriptionsCard>TITULAR DO CARTÃO</TitleDescriptionsCard>

              <DataDescriptionsCard>Ilda E. Neta</DataDescriptionsCard>
            </ContainerDescriptionsCardWrapper>

            <ContainerDescriptionsCardWrapper>
              <TitleDescriptionsCard>VALIDADE</TitleDescriptionsCard>

              <DataDescriptionsCard>05/22</DataDescriptionsCard>
            </ContainerDescriptionsCardWrapper>

            <ContainerDescriptionsCardWrapper>
              <TitleDescriptionsCard>CVV</TitleDescriptionsCard>

              <DataDescriptionsCard>934</DataDescriptionsCard>
            </ContainerDescriptionsCardWrapper>
          </ContainerDescriptionDataCard>
        </ContainerCard>

        <TitleSettingsCards>Configurações do Cartão</TitleSettingsCards>

        <ContainerSwitchButtons>
          <WrapperSwitchButtons>
            <ViewTest>
              <IconsButtons source={contactlessPayment} />

              <TextButtons>Pagamento sem Contato</TextButtons>
            </ViewTest>
            <SwitchButton>
              <Switch
                trackColor={{false: '#E7EBF1', true: '#34B27C'}}
                thumbColor={isEnabled ? '#fff' : '#E7EBF1'}
                ios_backgroundColor="#E7EBF1"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SwitchButton>
          </WrapperSwitchButtons>
        </ContainerSwitchButtons>

        <ContainerSwitchButtons>
          <WrapperSwitchButtons>
            <ViewTest>
              <IconsButtons source={onlinePayments} />

              <TextButtons>Pagamento Online</TextButtons>
            </ViewTest>

            <SwitchButton>
              <Switch
                trackColor={{false: '#E7EBF1', true: '#34B27C'}}
                thumbColor={isEnabled2 ? '#fff' : '#E7EBF1'}
                ios_backgroundColor="#E7EBF1"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </SwitchButton>
          </WrapperSwitchButtons>
        </ContainerSwitchButtons>

        <ContainerSwitchButtons last>
          <WrapperSwitchButtons>
            <ViewTest>
              <IconsButtons source={atmWithDraws} />

              <TextButtons>Saque Caixa Eletrônico</TextButtons>
            </ViewTest>
            <SwitchButton>
              <Switch
                trackColor={{false: '#E7EBF1', true: '#34B27C'}}
                thumbColor={isEnabled3 ? '#fff' : '#E7EBF1'}
                ios_backgroundColor="#E7EBF1"
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </SwitchButton>
          </WrapperSwitchButtons>
        </ContainerSwitchButtons>
      </Container>
      <Menu />
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#fff',
    elevation: 2,
  },
});
