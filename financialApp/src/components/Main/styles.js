import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #eceef2;
  border-radius: 22px;
  margin-top: -25px;
  flex: 1;
`;

export const ContainerTransactionsText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 20px 20px 20px;
`;

export const TransactionsText = styled.Text`
  font-size: ${(props) => (props.extraBold ? '20px' : '15px')};
  color: ${(props) => (props.extraBold ? '#123D6A' : '#254C92')};
  font-weight: bold;
`;
