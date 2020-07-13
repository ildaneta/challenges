import React from 'react';

import {Container, ContainerTransactionsText, TransactionsText} from './styles';

function Main() {
  return (
    <Container>
      <ContainerTransactionsText>
        <TransactionsText extraBold>Transações Recentes</TransactionsText>
        <TransactionsText>Veja todas</TransactionsText>
      </ContainerTransactionsText>
    </Container>
  );
}

export default Main;
