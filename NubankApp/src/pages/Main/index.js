import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
// captar o movimento do usuário de arrastar pra baixo o menu
// O state possui
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
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
        toValue: opened ? 500 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 500 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
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
                    inputRange: [0, 510],
                    outputRange: [0, 510],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 453.698,65</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 26,34 recebida de Ilda Neta hoje às 17:46h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
