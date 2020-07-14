import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated, Switch, Text } from 'react-native';

// PanGesture capta o movimento do usuário de arrastar pra baixo o menu
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import ellipsis from '../../assets/Ellipsis.png';
import cart from '../../assets/cart.png';
import card from '../../assets/credit-card.png';

import {
  CreditCard,
  Teste,
  WrapperPayments,
  SignOutButtonText,
  SignOutButton,
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  CardText,
  WrapperButtons,
  SmallDescription,
  EllipsisText,
  Ellipsis,
  Wrapper,
  Theme,
  DescriptionStrong,
  SmallDescriptionStrong,
} from './styles';

export default function Main() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  let offset = 0;

  // é otimizada para ser atualizada várias vezes sem o usuário notar
  const translateY = new Animated.Value(0);

  // captar a posição que o usuário está arrastando esse item e passar pra variavel de translate
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          // translationY guarda quantos % o usuário arrastou no eixo Y(pra cima e pra baixo)
          translationY: translateY,
        },
      },
    ],
    {
      // a animação será realizada pelo driver nativo do react native (garantindo performance)
      useNativeDriver: true,
    }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);

        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 540 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 540 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container isEnabled={isEnabled}>
      <Wrapper>
        <Switch
          trackColor={{ false: '#767577', true: '#fff' }}
          thumbColor={isEnabled ? '#8b10ae' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Theme>Theme</Theme>
      </Wrapper>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 540],
                    outputRange: [0, 540],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <CreditCard source={card} />
              <CardText>Cartão de crédito</CardText>
            </CardHeader>

            <CardContent>
              <Title>Fatura fechada</Title>
              <Description>
                R$ <DescriptionStrong>3.509,</DescriptionStrong>91
              </Description>
              <SmallDescription>
                Vencimento{' '}
                <SmallDescriptionStrong>08 abr</SmallDescriptionStrong> 14 abr
              </SmallDescription>

              <WrapperButtons>
                <SignOutButton>
                  <SignOutButtonText>Gerar boleto</SignOutButtonText>
                </SignOutButton>

                <Ellipsis>
                  <EllipsisText source={ellipsis} />
                </Ellipsis>
              </WrapperButtons>
            </CardContent>

            <CardFooter isEnabled={isEnabled}>
              <Teste source={cart} />

              <WrapperPayments>
                <Annotation>Compra mais recente em</Annotation>
                <Annotation>Pag*Decasa no valor de R$ 71,00...</Annotation>
              </WrapperPayments>

              <Icon name="keyboard-arrow-right" size={25} color="#999" />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
